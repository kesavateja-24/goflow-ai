import React, { useState, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { LanguageModal } from './components/LanguageModal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClarificationModal } from './components/ClarificationModal';
import { ProcessingStage } from './components/ProcessingStage';
import { CompleteJourney } from './components/CompleteJourney';
import { SearchSection } from './components/SearchSection';
import { CategoryExplorer } from './components/CategoryExplorer';
import { DocumentAssistant } from './components/DocumentAssistant';
import { TrackApplicationModal } from './components/TrackApplicationModal';
import { UploadDocModal } from './components/UploadDocModal';
import { PrivacyModal } from './components/PrivacyModal';
import { DocumentDetailModal } from './components/DocumentDetailModal';
import { Civic3DCanvas } from './components/Civic3DCanvas';
import { PrintableDocket } from './components/PrintableDocket';
import { Footer } from './components/Footer';
import { TrustStrip } from './components/TrustStrip';
import { PopularGoals } from './components/PopularGoals';
import { CitizenStorySection } from './components/CitizenStorySection';
import { VideoSection } from './components/VideoSection';
import { DocumentIntelligenceSection } from './components/DocumentIntelligenceSection';
import { JourneyTimelinePreview } from './components/JourneyTimelinePreview';
import { WhyGovflow } from './components/WhyGovflow';
import { FinalCta } from './components/FinalCta';
import { GovflowOrchestrator } from './api/orchestrator';
import { AP_VERIFIED_SERVICES } from './data/services';
import { ServiceRecord, CitizenProfile, IntentAnalysisResult, DocumentItem } from './types';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck2, 
  HelpCircle, 
  Search, 
  Building2, 
  Scale, 
  Layers 
} from 'lucide-react';

export const AppContent: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  const [currentView, setCurrentView] = useState<'home' | 'explore' | 'journey' | 'documents' | 'track'>('home');
  const [activeServiceId, setActiveServiceId] = useState<string>('ap-caste-cert');
  
  // Citizen profile
  const [profile, setProfile] = useState<CitizenProfile>(() => {
    const savedDistrict = localStorage.getItem('govflow_district') || 'guntur';
    const savedLoc = (localStorage.getItem('govflow_loctype') as 'rural' | 'urban') || 'rural';
    return {
      district: savedDistrict,
      locationType: savedLoc,
      preferredLanguage: lang
    };
  });

  // Held documents list
  const [heldDocIds, setHeldDocIds] = useState<string[]>(['doc-aadhaar']);

  // Modals and orchestration flow states
  const [pendingIntent, setPendingIntent] = useState<IntentAnalysisResult | null>(null);
  const [isClarificationOpen, setIsClarificationOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [selectedDocForDetail, setSelectedDocForDetail] = useState<DocumentItem | null>(null);
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  // URL Hash routing check on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('service=')) {
      const match = hash.match(/service=([^&]+)/);
      if (match && match[1]) {
        const found = AP_VERIFIED_SERVICES.find(s => s.id === match[1]);
        if (found) {
          setActiveServiceId(found.id);
          setCurrentView('journey');
        }
      }
    }
  }, []);

  const activeService = GovflowOrchestrator.generateJourney(activeServiceId, profile, heldDocIds) || AP_VERIFIED_SERVICES[0];

  // Handle Goal Search from Hero
  const handleSearchGoal = (userGoal: string) => {
    setSearchFeedback(null);
    const intentResult = GovflowOrchestrator.analyzeIntent(userGoal);
    if (!intentResult) {
      setSearchFeedback(`No verified Andhra Pradesh service found matching "${userGoal}". Please try describing your goal (e.g. caste certificate, scholarship, electricity connection, adangal).`);
      return;
    }

    setPendingIntent(intentResult);
    // Show quick 2-question clarification for administrative routing
    setIsClarificationOpen(true);
  };

  // Confirm Clarification & Start Orchestration
  const handleConfirmClarification = (newProfile: CitizenProfile) => {
    setProfile(newProfile);
    localStorage.setItem('govflow_district', newProfile.district);
    localStorage.setItem('govflow_loctype', newProfile.locationType);
    setIsClarificationOpen(false);

    if (pendingIntent) {
      setActiveServiceId(pendingIntent.matchedService.id);
    }
    // Launch realistic multi-stage processing
    setIsProcessing(true);
  };

  const handleProcessingComplete = () => {
    setIsProcessing(false);
    setCurrentView('journey');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Held Documents (I already have these documents)
  const handleToggleHeldDoc = (docId: string) => {
    setHeldDocIds(prev =>
      prev.includes(docId) ? prev.filter(id => id !== docId) : [...prev, docId]
    );
  };

  // Handle Direct Service Selection from Explorer / Search
  const handleSelectService = (serviceId: string) => {
    setActiveServiceId(serviceId);
    setCurrentView('journey');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Print Docket
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. First Screen Language Selection Modal */}
      <LanguageModal />

      {/* 2. Top Header Navigation */}
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          if (view === 'track') {
            setIsTrackModalOpen(true);
          } else {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        hasActiveJourney={Boolean(activeServiceId)}
        selectedDistrict={profile.district}
        onDistrictChange={(distId) => {
          setProfile(p => ({ ...p, district: distId }));
          localStorage.setItem('govflow_district', distId);
        }}
        onPrint={handlePrint}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
      />

      {/* Print Docket Container (Hidden on screen, shown in print) */}
      <PrintableDocket
        service={activeService}
        profile={profile}
        heldDocIds={heldDocIds}
      />

      {/* Main Content Areas */}
      <main className="flex-1 print-hide">
        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <div className="space-y-10 sm:space-y-14 pb-20">
            {/* 1. Hero Section (Light Background + Real Citizen Image + Search) */}
            <Hero
              onSearchGoal={handleSearchGoal}
              onOpenUploadModal={() => setIsUploadModalOpen(true)}
              onExploreServices={() => {
                setCurrentView('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Trust Strip (Immediately below hero) */}
            <TrustStrip />

            {/* Search Feedback / Error Notification if any */}
            {searchFeedback && (
              <div className="max-w-4xl mx-auto px-4">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium flex items-start space-x-3 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <strong>Official Verification Notice:</strong> {searchFeedback}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSearchFeedback(null)}
                    className="text-amber-700 font-bold hover:underline"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            {/* Simulated AI Processing Stages */}
            {isProcessing && (
              <div className="max-w-4xl mx-auto px-4">
                <ProcessingStage onComplete={handleProcessingComplete} />
              </div>
            )}

            {/* Main Homepage Flow Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
              
              {/* 3. Popular Services ("Popular Citizen Goals" with 10 cards) */}
              <PopularGoals
                onSelectService={handleSelectService}
                onExploreAll={() => {
                  setCurrentView('explore');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />

              {/* 4. Real Citizen Image Section ("One Goal. One Guided Journey.") */}
              <CitizenStorySection
                onStartJourney={() => handleSelectService('ap-jnanabhumi-scholarship')}
              />

              {/* 5. How GovFlow.AI Works — Complete Animated Explainer Video */}
              <VideoSection
                onSelectIncomeJourney={() => handleSelectService('ap-income-cert')}
                onExploreServices={() => {
                  setCurrentView('explore');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenDocuments={() => {
                  setCurrentView('documents');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenTrack={() => setIsTrackModalOpen(true)}
                onPrintDocket={handlePrint}
              />

              {/* 6. Document Intelligence Section ("Know What You Need Before You Apply") */}
              <DocumentIntelligenceSection
                onOpenDocuments={() => {
                  setCurrentView('documents');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />

              {/* 7. Journey Preview (Attractive Timeline Preview) */}
              <JourneyTimelinePreview
                onStartJourney={() => handleSelectService('ap-jnanabhumi-scholarship')}
              />

              {/* 8. Why GovFlow.AI (4 Feature Cards) */}
              <WhyGovflow />

              {/* 9. Signature 3D Interactive Civic Navigation Canvas */}
              <Civic3DCanvas />

              {/* 10. Service Categories Explorer */}
              <CategoryExplorer
                onSelectCategory={() => {
                  setCurrentView('explore');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectService={handleSelectService}
              />

              {/* 11. Final CTA ("Your Government Journey Starts Here.") */}
              <FinalCta
                onStartJourney={() => handleSelectService('ap-jnanabhumi-scholarship')}
                onExploreServices={() => {
                  setCurrentView('explore');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />

            </div>
          </div>
        )}

        {/* VIEW 2: COMPLETE JOURNEY */}
        {currentView === 'journey' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
            {/* Top Back / Breadcrumb Nav */}
            <div className="flex items-center justify-between pb-2">
              <button
                type="button"
                onClick={() => setCurrentView('home')}
                className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center space-x-1 p-1 rounded-lg hover:bg-slate-100 transition"
              >
                <span>{t.backBtn}</span>
                <span>to Citizen Overview</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentView('explore')}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Browse other services →
              </button>
            </div>

            {/* Complete Orchestrated Journey Component */}
            <CompleteJourney
              service={activeService}
              profile={profile}
              heldDocIds={heldDocIds}
              onToggleHeldDoc={handleToggleHeldDoc}
              onPrint={handlePrint}
              onOpenDocModal={(doc) => setSelectedDocForDetail(doc)}
            />
          </div>
        )}

        {/* VIEW 3: EXPLORE SERVICES & SEARCH */}
        {currentView === 'explore' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
            <SearchSection onSelectService={handleSelectService} />
            <CategoryExplorer
              onSelectCategory={() => {}}
              onSelectService={handleSelectService}
            />
          </div>
        )}

        {/* VIEW 4: DOCUMENTS ASSISTANT */}
        {currentView === 'documents' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
            <DocumentAssistant
              onSelectServiceWithDoc={handleSelectService}
              onOpenDocModal={(doc) => setSelectedDocForDetail(doc)}
            />
          </div>
        )}
      </main>

      {/* Clarification Modal for Conversational Administrative Routing */}
      {isClarificationOpen && pendingIntent && (
        <ClarificationModal
          intent={pendingIntent}
          initialDistrict={profile.district}
          initialLocationType={profile.locationType}
          onConfirm={handleConfirmClarification}
          onCancel={() => setIsClarificationOpen(false)}
        />
      )}

      {/* Official Tracking Modal */}
      {isTrackModalOpen && (
        <TrackApplicationModal onClose={() => setIsTrackModalOpen(false)} />
      )}

      {/* Document Upload / Inspect Modal */}
      {isUploadModalOpen && (
        <UploadDocModal
          onClose={() => setIsUploadModalOpen(false)}
          onSelectDocumentType={(kw) => handleSearchGoal(kw)}
        />
      )}

      {/* Privacy Charter Modal */}
      {isPrivacyModalOpen && (
        <PrivacyModal onClose={() => setIsPrivacyModalOpen(false)} />
      )}

      {/* Deep Document Details Modal */}
      {selectedDocForDetail && (
        <DocumentDetailModal
          document={selectedDocForDetail}
          onClose={() => setSelectedDocForDetail(null)}
        />
      )}

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateExplore={() => {
          setCurrentView('explore');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateJourney={() => {
          setCurrentView('journey');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateDocuments={() => {
          setCurrentView('documents');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenTrack={() => setIsTrackModalOpen(true)}
        onOpenLanguage={() => {}}
      />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
