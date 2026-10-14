import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Phone, Heart, Globe2, Building2, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onNavigateHome: () => void;
  onNavigateExplore: () => void;
  onNavigateJourney?: () => void;
  onNavigateDocuments?: () => void;
  onOpenTrack?: () => void;
  onOpenLanguage: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onNavigateHome,
  onNavigateExplore,
  onNavigateJourney,
  onNavigateDocuments,
  onOpenTrack,
  onOpenLanguage
}) => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#07172B] text-white border-t border-slate-800 pt-16 pb-12 print-hide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Mission (md:col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={onNavigateHome}>
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md border border-amber-500/30">
                GF
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                GOVFLOW<span className="text-amber-400">.AI</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 font-medium">
              “From a citizen&apos;s goal to a complete government journey.”
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Demystifying complex public services across Andhra Pradesh. We connect citizens to statutory requirements, prerequisite dependency roadmaps, and official department portals.
            </p>

            <div className="pt-1 flex items-center space-x-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Grounded in Andhra Pradesh Gazette & MeeSeva Citizen Charters.</span>
            </div>
          </div>

          {/* Col 2: GovFlow.AI Column (md:col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              GovFlow.AI
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button 
                  type="button" 
                  onClick={onNavigateHome} 
                  className="hover:text-white transition"
                >
                  About GovFlow
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onNavigateHome} 
                  className="hover:text-white transition"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onNavigateExplore} 
                  className="hover:text-white transition"
                >
                  Explore Services
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenPrivacy} 
                  className="hover:text-white transition"
                >
                  Public Verification Sources
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Citizen Resources (md:col-span-4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Citizen Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button 
                  type="button" 
                  onClick={onNavigateDocuments || onNavigateExplore} 
                  className="hover:text-white transition"
                >
                  Documents
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onNavigateJourney || onNavigateHome} 
                  className="hover:text-white transition"
                >
                  My Journey
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenTrack || onNavigateHome} 
                  className="hover:text-white transition"
                >
                  Track Application
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenPrivacy} 
                  className="hover:text-white transition"
                >
                  Help & Grievance (Spandana 1902)
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-amber-400 font-bold text-xs flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Citizen Helpline: 1902 (Spandana / GSWS)</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Toll-Free AP Public Grievance & Secretariat Support
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Clear Mandatory Statutory Disclaimer */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 leading-relaxed text-center max-w-4xl mx-auto space-y-3">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-slate-300">
            <strong className="text-white">Important Notice & Statutory Disclaimer:</strong> GovFlow.AI is an independent citizen-assistance platform. Government applications and decisions are handled by the respective official departments and portals.
          </div>

          {/* Legal / Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-slate-400">
            <button type="button" onClick={onOpenPrivacy} className="hover:text-white transition">
              Privacy
            </button>
            <span>•</span>
            <button type="button" onClick={onOpenPrivacy} className="hover:text-white transition">
              Terms
            </button>
            <span>•</span>
            <button type="button" onClick={onOpenPrivacy} className="hover:text-white transition">
              Accessibility
            </button>
            <span>•</span>
            <button type="button" onClick={onOpenPrivacy} className="hover:text-white transition">
              Contact
            </button>
          </div>

          <div className="text-[11px] text-slate-500 pt-2">
            © 2026 GovFlow.AI • Empowering Citizens Across all 26 Districts of Andhra Pradesh, India.
          </div>
        </div>

      </div>
    </footer>
  );
};
