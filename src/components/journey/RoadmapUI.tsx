import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { JourneyStep, DocumentItem } from '../../types';
import { 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Building2, 
  Clock, 
  Receipt, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  Globe2,
  MapPin,
  Check
} from 'lucide-react';

interface RoadmapUIProps {
  steps: JourneyStep[];
  allDocuments: DocumentItem[];
  completedSteps: number[];
  onToggleStep: (stepNumber: number) => void;
  onOpenDocModal?: (doc: DocumentItem) => void;
}

export const RoadmapUI: React.FC<RoadmapUIProps> = ({
  steps,
  allDocuments,
  completedSteps,
  onToggleStep,
  onOpenDocModal
}) => {
  const { lang, t } = useLanguage();
  const [expandedSteps, setExpandedSteps] = useState<number[]>(() => [1, 2]);

  const toggleExpand = (stepNumber: number) => {
    setExpandedSteps(prev =>
      prev.includes(stepNumber) ? prev.filter(n => n !== stepNumber) : [...prev, stepNumber]
    );
  };

  const expandAll = () => setExpandedSteps(steps.map(s => s.stepNumber));
  const collapseAll = () => setExpandedSteps([]);

  return (
    <div className="space-y-4">
      {/* Top Controls */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Complete Step-by-Step Roadmap
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Every verified stage from preparation to digital issuance.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <button
            type="button"
            onClick={expandAll}
            className="px-2.5 py-1 text-slate-600 hover:text-slate-900 font-semibold hover:bg-slate-100 rounded-lg transition"
          >
            Expand All
          </button>
          <span className="text-slate-300">•</span>
          <button
            type="button"
            onClick={collapseAll}
            className="px-2.5 py-1 text-slate-600 hover:text-slate-900 font-semibold hover:bg-slate-100 rounded-lg transition"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Steps List */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
        {steps.map((step) => {
          const isDone = completedSteps.includes(step.stepNumber);
          const isExpanded = expandedSteps.includes(step.stepNumber);

          const title = step.title[lang] || step.title.en;
          const explanation = step.explanation[lang] || step.explanation.en;
          const actionText = step.action[lang] || step.action.en;
          const whatNext = step.whatHappensNext ? (step.whatHappensNext[lang] || step.whatHappensNext.en) : null;
          const actionLabel = step.actionLabel ? (step.actionLabel[lang] || step.actionLabel.en) : 'OPEN OFFICIAL PORTAL ↗';

          // Required documents for this step
          const requiredDocs = allDocuments.filter(d => step.documentsRequired.includes(d.id));

          return (
            <div
              key={step.stepNumber}
              id={`step-${step.stepNumber}`}
              className={`relative bg-white rounded-2xl border transition-all duration-200 shadow-xs ${
                isDone
                  ? 'border-emerald-200 bg-emerald-50/10'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Connected Bullet Node */}
              <button
                type="button"
                onClick={() => onToggleStep(step.stepNumber)}
                className={`absolute -left-[30px] sm:-left-[38px] top-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition shadow-sm z-10 ${
                  isDone
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'bg-white border-slate-300 text-slate-400 hover:border-[#0A2540] hover:text-[#0A2540]'
                }`}
                title={isDone ? 'Mark as incomplete' : 'Mark as completed'}
              >
                {isDone ? (
                  <Check className="w-4 h-4 stroke-[3]" />
                ) : (
                  <span className="text-xs font-bold text-slate-700">{step.stepNumber}</span>
                )}
              </button>

              {/* Step Card Header */}
              <div
                className="p-5 sm:p-6 cursor-pointer select-none"
                onClick={() => toggleExpand(step.stepNumber)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#0A2540] text-white">
                        STAGE {step.stepNumber < 10 ? `0${step.stepNumber}` : step.stepNumber}
                      </span>

                      {step.onlineAvailable && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 flex items-center space-x-1">
                          <Globe2 className="w-3 h-3" />
                          <span>Online Available</span>
                        </span>
                      )}

                      {step.offlineAvailable && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>Secretariat / Offline</span>
                        </span>
                      )}

                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-medium text-slate-500">
                        {step.expectedDays}
                      </span>
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold tracking-tight ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {title}
                    </h3>
                  </div>

                  {/* Expand Chevron */}
                  <div className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {/* Brief Summary if collapsed */}
                {!isExpanded && (
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-1">
                    {explanation}
                  </p>
                )}
              </div>

              {/* Expanded Details Body */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-5 animate-in fade-in duration-200">
                  {/* Detailed Explanation */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Official Procedure
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {explanation}
                    </p>
                  </div>

                  {/* Required Documents in this stage */}
                  {requiredDocs.length > 0 && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 mb-2">
                        <FileText className="w-3.5 h-3.5 text-amber-600" />
                        <span>Documents Required at this Stage:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {requiredDocs.map(doc => {
                          const docName = doc.name[lang] || doc.name.en;
                          return (
                            <button
                              key={doc.id}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onOpenDocModal) onOpenDocModal(doc);
                              }}
                              className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-800 hover:border-amber-500 hover:text-amber-900 transition shadow-xs flex items-center space-x-1.5"
                            >
                              <span>{docName}</span>
                              <span className="text-[10px] text-blue-600 underline">info</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Practical Next Action */}
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                    <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                      Action Required:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {actionText}
                    </p>

                    {step.offlineVenue && (
                      <div className="mt-2 text-xs text-slate-600 flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span><strong>In-Person Venue:</strong> {step.offlineVenue}</span>
                      </div>
                    )}
                  </div>

                  {/* What Happens Next Post-Step */}
                  {whatNext && (
                    <div className="text-xs text-slate-500 pl-3 border-l-2 border-slate-300">
                      <strong className="text-slate-700">What happens next:</strong> {whatNext}
                    </div>
                  )}

                  {/* Meta Strip: Fee, Dept, and Portal Link */}
                  <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-100 gap-3">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center space-x-1">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>{step.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Receipt className="w-3.5 h-3.5 text-slate-400" />
                        <span>Fee: <strong className="text-slate-800 font-semibold">{step.fee}</strong></span>
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => onToggleStep(step.stepNumber)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                          isDone
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {isDone ? '✓ Completed' : 'Mark as Done'}
                      </button>

                      {step.actionUrl && (
                        <a
                          href={step.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-lg bg-[#0A2540] hover:bg-[#07192C] text-white text-xs font-bold transition shadow-xs"
                        >
                          <span>{actionLabel}</span>
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
