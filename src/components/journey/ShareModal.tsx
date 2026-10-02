import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceRecord } from '../../types';
import { Share2, Copy, Check, X, ShieldCheck, Printer } from 'lucide-react';

interface ShareModalProps {
  service: ServiceRecord;
  onClose: () => void;
  onPrint: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ service, onClose, onPrint }) => {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const title = service.serviceName[lang] || service.serviceName.en;
  const shareUrl = `${window.location.origin}/#service=${service.id}&lang=${lang}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071527]/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2 text-[#0A2540]">
            <Share2 className="w-5 h-5 text-amber-600" />
            <h3 className="text-xl font-bold text-slate-900">
              {t.shareJourney}
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

        <div>
          <h4 className="text-sm font-bold text-slate-900">{title}</h4>
          <p className="text-xs text-slate-500 mt-1">
            Share this verified statutory roadmap with family or fellow citizens without exposing any private data.
          </p>
        </div>

        {/* Share Link Box */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            readOnly
            value={shareUrl}
            className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-mono focus:outline-none"
          />
          <button
            type="button"
            onClick={handleCopy}
            className="px-4 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>

        {copied && (
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center space-x-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{t.linkCopied}</span>
          </div>
        )}

        {/* Print Option */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-500 flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Zero personal citizen info shared.</span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onPrint();
            }}
            className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center space-x-1.5"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>{t.downloadPdf}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
