import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceRecord, CitizenProfile, DocumentItem } from '../types';
import { JourneyHeader } from './journey/JourneyHeader';
import { NextActionBanner } from './journey/NextActionBanner';
import { ProgressTracker } from './journey/ProgressTracker';
import { RoadmapUI } from './journey/RoadmapUI';
import { DocumentIntelligence } from './journey/DocumentIntelligence';
import { DependencyGraph } from './journey/DependencyGraph';
import { WhereToApply } from './journey/WhereToApply';
import { WhatHappensNext } from './journey/WhatHappensNext';
import { ExceptionCases } from './journey/ExceptionCases';
import { SourceVerification } from './journey/SourceVerification';
import { ShareModal } from './journey/ShareModal';
import confetti from 'canvas-confetti';

interface CompleteJourneyProps {
  service: ServiceRecord;
  profile?: CitizenProfile;
  heldDocIds: string[];
  onToggleHeldDoc: (docId: string) => void;
  onPrint: () => void;
  onOpenDocModal?: (doc: DocumentItem) => void;
}

export const CompleteJourney: React.FC<CompleteJourneyProps> = ({
  service,
  profile,
  heldDocIds,
  onToggleHeldDoc,
  onPrint,
  onOpenDocModal
}) => {
  const { lang, t } = useLanguage();
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    // Start with already completed stages (e.g. if held docs skipped step 2)
    return service.steps.filter(s => s.completed).map(s => s.stepNumber);
  });
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps(prev => {
      let updated: number[];
      if (prev.includes(stepNumber)) {
        updated = prev.filter(n => n !== stepNumber);
      } else {
        updated = [...prev, stepNumber];
        // If all completed, trigger celebratory confetti
        if (updated.length === service.steps.length) {
          try {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
          } catch {}
        }
      }
      return updated;
    });
  };

  const scrollToStep = (stepNumber: number) => {
    const el = document.getElementById(`step-${stepNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Journey Header */}
      <JourneyHeader
        service={service}
        profile={profile}
        onPrint={onPrint}
        onShare={() => setIsShareModalOpen(true)}
      />

      {/* 2. "What do I need right now?" Banner */}
      <NextActionBanner
        service={service}
        completedSteps={completedSteps}
        onOpenDocModal={onOpenDocModal}
        onScrollToStep={scrollToStep}
      />

      {/* 3. Progress Tracker */}
      <ProgressTracker
        totalSteps={service.steps.length}
        completedStepNumbers={completedSteps}
        onToggleStep={toggleStep}
      />

      {/* 4. Complete Step-by-Step Roadmap */}
      <RoadmapUI
        steps={service.steps}
        allDocuments={service.documents}
        completedSteps={completedSteps}
        onToggleStep={toggleStep}
        onOpenDocModal={onOpenDocModal}
      />

      {/* 5. Document Intelligence (Mandatory, Conditional, Supporting) */}
      <DocumentIntelligence
        documents={service.documents}
        heldDocIds={heldDocIds}
        onToggleHeldDoc={onToggleHeldDoc}
        onOpenDocModal={onOpenDocModal}
      />

      {/* 6. Interactive Document Dependency Graph (DAG) */}
      <DependencyGraph
        service={service}
        heldDocIds={heldDocIds}
        onOpenDocModal={onOpenDocModal}
      />

      {/* 7. Where to Apply (Online Portal vs Grama/Ward Sachivalayam) */}
      <WhereToApply
        service={service}
        profile={profile}
      />

      {/* 8. What Happens Next (Post-Submission Workflow) */}
      <WhatHappensNext
        service={service}
      />

      {/* 9. Exception Cases ("Does your situation match one of these?") */}
      <ExceptionCases
        exceptionCases={service.exceptionCases}
      />

      {/* 10. Official Source Verification Panel */}
      <SourceVerification
        sources={service.sources}
        lastVerified={service.lastVerified}
        verificationStatus={service.verificationStatus}
      />

      {/* Share Modal */}
      {isShareModalOpen && (
        <ShareModal
          service={service}
          onClose={() => setIsShareModalOpen(false)}
          onPrint={onPrint}
        />
      )}
    </div>
  );
};
