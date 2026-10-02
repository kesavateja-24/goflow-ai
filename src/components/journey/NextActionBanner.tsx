import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceRecord, JourneyStep, DocumentItem } from '../../types';
import { AlertCircle, ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface NextActionBannerProps {
  service: ServiceRecord;
  completedSteps: number[];
  onOpenDocModal?: (doc: DocumentItem) => void;
  onScrollToStep?: (stepNumber: number) => void;
}

export const NextActionBanner: React.FC<NextActionBannerProps> = ({
  service,
  completedSteps,
  onOpenDocModal,
  onScrollToStep
}) => {
  const { lang, t } = useLanguage();

  // Find the first uncompleted step
  const nextStep = service.steps.find(step => !completedSteps.includes(step.stepNumber));

  // Find any missing required document
  const missingRequiredDoc = service.documents.find(
    doc => doc.category === 'required' && doc.status === 'need'
  );

  if (!nextStep) {
    return (
      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <h4 className="font-bold text-sm sm:text-base">All Journey Stages Completed!</h4>
            <p className="text-xs sm:text-sm text-emerald-700">
              You have completed all prerequisite documents and statutory requirements for {service.serviceName[lang] || service.serviceName.en}.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Determine what citizen needs right now
  let headline = '';
  let subtext = '';
  let buttonLabel = '';
  let buttonAction = () => {};

  if (missingRequiredDoc && nextStep.stepNumber <= 3) {
    const docName = missingRequiredDoc.name[lang] || missingRequiredDoc.name.en;
    headline = `Before you submit, you need to acquire: ${docName}`;
    subtext = `Issued by ${missingRequiredDoc.issuingAuthority} (${missingRequiredDoc.estimatedEffort}).`;
    buttonLabel = `${t.getThisDocumentBtn}`;
    buttonAction = () => {
      if (onOpenDocModal) onOpenDocModal(missingRequiredDoc);
    };
  } else {
    headline = nextStep.title[lang] || nextStep.title.en;
    subtext = nextStep.action[lang] || nextStep.action.en;
    buttonLabel = nextStep.actionUrl ? 'OPEN OFFICIAL PORTAL ↗' : 'VIEW STEP DETAILS ↓';
    buttonAction = () => {
      if (nextStep.actionUrl) {
        window.open(nextStep.actionUrl, '_blank', 'noopener,noreferrer');
      } else if (onScrollToStep) {
        onScrollToStep(nextStep.stepNumber);
      }
    };
  }

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-2 border-amber-500/30 shadow-xs relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5 shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">
                {t.nextActionTitle}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-xs text-slate-500 font-medium">Stage {nextStep.stepNumber} of {service.steps.length}</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
              {headline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-normal max-w-3xl">
              {subtext}
            </p>
          </div>
        </div>

        <div className="sm:self-center shrink-0">
          <button
            type="button"
            onClick={buttonAction}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-xs sm:text-sm font-bold shadow-md transition group"
          >
            <span>{buttonLabel}</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
