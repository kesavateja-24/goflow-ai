import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Phone, Heart, Globe2, Building2 } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onNavigateHome: () => void;
  onNavigateExplore: () => void;
  onOpenLanguage: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onNavigateHome,
  onNavigateExplore,
  onOpenLanguage
}) => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#071527] text-white border-t border-slate-800 pt-16 pb-12 print-hide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                GF
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                GOVFLOW<span className="text-amber-400">.AI</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 font-medium max-w-md">
              “From a Citizen’s Goal to a Complete Government Journey.”
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
              Making fragmented government processes into one understandable citizen journey without replacing official Andhra Pradesh government systems.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Grounded in official Government of AP Gazette & MeeSeva Citizen Charters.</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button type="button" onClick={onNavigateHome} className="hover:text-white transition">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button type="button" onClick={onNavigateExplore} className="hover:text-white transition">
                  {t.navExplore}
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenLanguage} className="hover:text-white transition">
                  Change Language ({lang === 'en' ? 'English' : lang === 'te' ? 'తెలుగు' : 'हिन्दी'})
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenPrivacy} className="hover:text-white transition">
                  Privacy Charter & Sources
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals & Helplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Andhra Pradesh Helplines
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-amber-400 font-bold flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Spandana Helpline: 1902</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Toll-Free AP Public Grievance Redressal
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-emerald-400 font-bold flex items-center space-x-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>GSWS Call Centre: 1902</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Village & Ward Secretariats Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official Statutory Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed text-center max-w-4xl mx-auto">
          <p className="bg-white/5 p-4 rounded-xl border border-white/10">
            <strong>Official Statutory Disclaimer:</strong> GOVFLOW AI is an independent citizen-navigation platform and is not itself an official government portal. Users are redirected to official government websites (such as <code>onlineap.meeseva.gov.in</code>, <code>gramawardsachivalayam.ap.gov.in</code>, <code>ccla.ap.gov.in</code>) for actual applications, submissions, payments, and official status information.
          </p>
          <div className="mt-4 text-[11px] text-slate-500">
            © 2026 GOVFLOW AI • Dedicated to Citizen Accessibility across all 26 Districts of Andhra Pradesh, India.
          </div>
        </div>
      </div>
    </footer>
  );
};
