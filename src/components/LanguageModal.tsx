import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Check, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';

interface LanguageModalProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({ forceOpen, onClose }) => {
  const { lang, completeFirstVisit, isFirstVisit, isLanguageModalOpen, closeLanguageModal, setLang } = useLanguage();
  const [selected, setSelected] = useState<Language>(lang);

  const isOpen = forceOpen || isFirstVisit || isLanguageModalOpen;

  if (!isOpen) return null;

  const handleContinue = () => {
    if (isFirstVisit) {
      completeFirstVisit(selected);
    } else {
      setLang(selected);
      closeLanguageModal();
      if (onClose) onClose();
    }
  };

  const languages = [
    {
      id: 'en' as Language,
      flag: '🇬🇧',
      title: 'English',
      nativeTitle: 'English',
      subtitle: 'Standard Indian civic administration & legal documentation',
      badge: 'Official',
      sample: 'Complete citizen service roadmaps with verified portals.'
    },
    {
      id: 'te' as Language,
      flag: '🇮🇳',
      title: 'Telugu',
      nativeTitle: 'తెలుగు',
      subtitle: 'ఆంధ్రప్రదేశ్ అధికార భాష — సమగ్ర పౌర సేవలు మరియు మార్గదర్శకాలు',
      badge: 'ఆంధ్రప్రదేశ్ అధికార భాష',
      sample: 'మీసేవ, సచివాలయం మరియు ప్రభుత్వ సేవల పూర్తి ప్రయాణం.'
    },
    {
      id: 'hi' as Language,
      flag: '🇮🇳',
      title: 'Hindi',
      nativeTitle: 'हिन्दी',
      subtitle: 'आंध्र प्रदेश नागरिक सेवा मार्गदर्शन एवं आधिकारिक पोर्टल',
      badge: 'समर्थित',
      sample: 'सरकारी सेवाओं की पूरी यात्रा और अनिवार्य दस्तावेज़।'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071527]/90 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Civic Header Top Bar */}
        <div className="bg-gradient-to-r from-[#0A2540] via-[#0D3862] to-[#0A2540] text-white p-8 relative">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Government of Andhra Pradesh Citizen Navigation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Welcome to <span className="text-amber-400">GOVFLOW AI</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-medium mt-1">
            Your government journey, simplified.
          </p>
          <p className="text-slate-400 text-sm mt-1">
            From a Citizen’s Goal to a Complete Government Journey.
          </p>

          <div className="absolute top-6 right-6 hidden sm:block opacity-20">
            <Globe2 className="w-24 h-24 text-white" />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              Choose your language / మీ భాషను ఎంచుకోండి
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              The entire citizen journey, document checklists, and instructions will adapt to your choice.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {languages.map((l) => {
              const isCurrent = selected === l.id;
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setSelected(l.id)}
                  className={`relative flex flex-col text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                    isCurrent
                      ? 'border-[#0A2540] bg-blue-50/50 shadow-md ring-2 ring-blue-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{l.flag}</span>
                    {isCurrent ? (
                      <span className="w-6 h-6 rounded-full bg-[#0A2540] text-white flex items-center justify-center shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full border border-slate-300 bg-slate-50" />
                    )}
                  </div>

                  <div className="flex items-baseline space-x-2">
                    <h3 className="text-xl font-bold text-slate-900">{l.nativeTitle}</h3>
                    {l.title !== l.nativeTitle && (
                      <span className="text-xs text-slate-400 font-medium">({l.title})</span>
                    )}
                  </div>

                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-800 self-start">
                    {l.badge}
                  </span>

                  <p className="mt-3 text-xs text-slate-600 line-clamp-2">
                    {l.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic">
                    "{l.sample}"
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-200 gap-4">
            <div className="text-xs text-slate-500 flex items-center space-x-1.5">
              <Globe2 className="w-4 h-4 text-slate-400" />
              <span>You can freely change language at any point from the top navigation bar.</span>
            </div>

            <button
              type="button"
              onClick={handleContinue}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#0A2540] text-white font-bold text-base hover:bg-[#071a2e] transition shadow-lg shadow-blue-950/20 active:scale-[0.98] group"
            >
              <span>Continue →</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
