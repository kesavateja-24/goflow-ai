import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ExceptionCase } from '../../types';
import { AlertTriangle, ChevronDown, ChevronUp, FileText, CheckCircle2 } from 'lucide-react';

interface ExceptionCasesProps {
  exceptionCases?: ExceptionCase[];
}

export const ExceptionCases: React.FC<ExceptionCasesProps> = ({ exceptionCases }) => {
  const { lang, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  if (!exceptionCases || exceptionCases.length === 0) return null;

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
      <div>
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
          Exception Handling
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
          {t.exceptionsTitle}
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {t.exceptionsSubtitle}
        </p>
      </div>

      <div className="space-y-3 pt-2">
        {exceptionCases.map((ec) => {
          const isOpen = openId === ec.id;
          const title = ec.title[lang] || ec.title.en;
          const resolution = ec.resolution[lang] || ec.resolution.en;

          return (
            <div
              key={ec.id}
              className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden transition"
            >
              <button
                type="button"
                onClick={() => toggle(ec.id)}
                className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-slate-100/60 transition"
              >
                <div className="flex items-center space-x-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-sm font-bold text-slate-800">{title}</span>
                </div>
                <div className="text-slate-400">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="p-4 pt-2 border-t border-slate-200/80 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed animate-in fade-in duration-150">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Official Alternative Solution: </strong>
                      <span>{resolution}</span>
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
