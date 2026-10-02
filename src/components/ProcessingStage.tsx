import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Sparkles, Shield, Database, Network, FileCheck } from 'lucide-react';

interface ProcessingStageProps {
  onComplete: () => void;
}

export const ProcessingStage: React.FC<ProcessingStageProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    { id: 1, label: t.stageUnderstanding, icon: Sparkles },
    { id: 2, label: t.stageCheckingReqs, icon: Shield },
    { id: 3, label: t.stageMappingDeps, icon: Network },
    { id: 4, label: t.stageFindingSources, icon: Database },
    { id: 5, label: t.stageBuildingJourney, icon: FileCheck },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev < stages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(onComplete, 450);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(timer);
  }, [onComplete, stages.length]);

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl border border-slate-200 text-center animate-in fade-in duration-300">
      <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 border border-blue-200 text-[#0A2540] flex items-center justify-center mb-4">
        <Sparkles className="w-6 h-6 animate-spin text-amber-600" />
      </div>

      <h3 className="text-xl font-bold text-slate-800">
        Orchestrating Andhra Pradesh Citizen Journey
      </h3>
      <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
        Querying verified statutory databases across MeeSeva, GSWS, Revenue, and Transport portals.
      </p>

      {/* Stages Progress List */}
      <div className="mt-8 space-y-3 text-left max-w-lg mx-auto">
        {stages.map((stage, idx) => {
          const isDone = idx < currentStage;
          const isCurrent = idx === currentStage;
          const isPending = idx > currentStage;
          const Icon = stage.icon;

          return (
            <div
              key={stage.id}
              className={`flex items-center space-x-3.5 p-3 rounded-xl transition-all duration-300 ${
                isCurrent
                  ? 'bg-blue-50/80 border border-blue-200 shadow-xs scale-[1.01]'
                  : isDone
                  ? 'bg-slate-50/50 opacity-90'
                  : 'opacity-40'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition ${
                  isDone
                    ? 'bg-emerald-600 text-white'
                    : isCurrent
                    ? 'bg-[#0A2540] text-white animate-pulse'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : <Icon className="w-3.5 h-3.5" />}
              </div>

              <div className="flex-1">
                <span
                  className={`text-xs sm:text-sm font-semibold transition ${
                    isCurrent
                      ? 'text-[#0A2540] font-bold'
                      : isDone
                      ? 'text-slate-700'
                      : 'text-slate-400'
                  }`}
                >
                  {stage.label}
                </span>
              </div>

              {isCurrent && (
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 animate-pulse">
                  Verifying...
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
