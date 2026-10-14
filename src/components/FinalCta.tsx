import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FinalCtaProps {
  onStartJourney: () => void;
  onExploreServices: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartJourney, onExploreServices }) => {
  const { lang } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0F355C] to-[#081E34] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-700 text-center">
      {/* Background radial accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold border border-white/15">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Verified Andhra Pradesh Citizen Support</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Your Government Journey Starts Here.
        </h2>

        <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
          Tell us what you want to accomplish. We'll help you understand what comes next.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onStartJourney}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition active:scale-[0.98] flex items-center justify-center space-x-2"
          >
            <span>Build My Journey →</span>
          </button>

          <button
            type="button"
            onClick={onExploreServices}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition active:scale-[0.98] flex items-center justify-center space-x-2"
          >
            <Compass className="w-4 h-4 text-slate-300" />
            <span>Explore Services</span>
          </button>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-300 border-t border-white/10 max-w-md mx-auto">
          <span className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>All 26 Districts Supported</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>MeeSeva & GSWS Integrated</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>100% Free & Open Citizen Access</span>
          </span>
        </div>
      </div>
    </section>
  );
};
