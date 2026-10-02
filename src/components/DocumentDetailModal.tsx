import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DocumentItem } from '../types';
import { X, ExternalLink, Building, Clock, HelpCircle, ShieldCheck, FileCheck } from 'lucide-react';

interface DocumentDetailModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

export const DocumentDetailModal: React.FC<DocumentDetailModalProps> = ({ document, onClose }) => {
  const { lang } = useLanguage();

  if (!document) return null;

  const name = document.name[lang] || document.name.en;
  const purpose = document.purpose[lang] || document.purpose.en;
  const why = document.whyRequired[lang] || document.whyRequired.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071527]/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-[#0A2540]">
              Official Document Intelligence
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              {name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <div>
            <strong className="text-slate-900 block mb-1">Purpose in Application:</strong>
            <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
              {purpose}
            </p>
          </div>

          <div>
            <strong className="text-slate-900 block mb-1">Why is this required? (Statutory Basis):</strong>
            <p className="text-slate-600 leading-relaxed bg-amber-50/50 p-3 rounded-xl border border-amber-100">
              {why}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-400 block">Issuing Authority</span>
              <span className="text-xs font-bold text-slate-800 mt-0.5 block">{document.issuingAuthority}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-400 block">Expected Timeframe</span>
              <span className="text-xs font-bold text-slate-800 mt-0.5 block">{document.estimatedEffort}</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Source: <code className="text-slate-700">{document.officialPortal}</code>
          </div>

          <a
            href={document.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-xs font-bold transition shadow-xs"
          >
            <span>Visit Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
