import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';

interface ProgressTrackerProps {
  totalSteps: number;
  completedStepNumbers: number[];
  attentionStepNumbers?: number[];
  onToggleStep: (stepNumber: number) => void;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  totalSteps,
  completedStepNumbers,
  attentionStepNumbers = [],
  onToggleStep
}) => {
  const { t } = useLanguage();
  const completedCount = completedStepNumbers.length;
  const percentage = Math.round((completedCount / totalSteps) * 100);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t.progressTitle}
          </span>
          <div className="flex items-baseline space-x-2 mt-0.5">
            <span className="text-2xl font-black text-slate-900">
              {completedCount} / {totalSteps}
            </span>
            <span className="text-sm font-semibold text-slate-500">
              {t.completedSteps} ({percentage}%)
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-4 text-xs text-slate-500">
          <span className="flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Completed</span>
          </span>
          <span className="flex items-center space-x-1">
            <Circle className="w-3.5 h-3.5 text-slate-300" />
            <span>Pending</span>
          </span>
          <span className="flex items-center space-x-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Needs Attention</span>
          </span>
        </div>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-[#0A2540] to-emerald-600 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Quick Interactive Clickable Stage Dots */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 pt-2 border-t border-slate-100">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((num) => {
          const isDone = completedStepNumbers.includes(num);
          const needsAttention = attentionStepNumbers.includes(num);

          return (
            <button
              key={num}
              type="button"
              onClick={() => onToggleStep(num)}
              className={`flex items-center justify-center py-2 px-2 rounded-xl text-xs font-bold border transition ${
                isDone
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs'
                  : needsAttention
                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
              title={`Click to mark Stage ${num} completed/pending`}
            >
              {isDone ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1" />
              ) : (
                <Circle className="w-3 h-3 text-slate-400 mr-1" />
              )}
              <span>Stage {num}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
