import React from 'react';
import { 
  ExternalLink, 
  FileCheck2, 
  Compass, 
  Activity, 
  HeartHandshake, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustStrip: React.FC = () => {
  const { lang } = useLanguage();

  const badges = [
    {
      icon: ExternalLink,
      titleEn: 'Official Portal Links',
      titleTe: 'అధికారిక పోర్టల్ లింకులు',
      titleHi: 'आधिकारिक पोर्टल लिंक',
      descEn: 'Direct verified gateways',
      descTe: 'ధ్రువీకరించిన ప్రభుత్వ లింకులు',
      descHi: 'सत्यापित पोर्टल'
    },
    {
      icon: FileCheck2,
      titleEn: 'Document Guidance',
      titleTe: 'పత్రాల మార్గదర్శకం',
      titleHi: 'दस्तावेज़ मार्गदर्शन',
      descEn: 'Exact required proofs',
      descTe: 'అవసరమైన ధ్రువపత్రాలు',
      descHi: 'सटीक आवश्यक प्रमाण'
    },
    {
      icon: Compass,
      titleEn: 'Step-by-Step Journey',
      titleTe: 'దశలవారీ ప్రయాణం',
      titleHi: 'चरणबद्ध यात्रा',
      descEn: 'Sequential roadmap',
      descTe: 'ఖచ్చితమైన ప్రణాళిక',
      descHi: 'क्रमबद्ध रोडमैप'
    },
    {
      icon: Activity,
      titleEn: 'Application Tracking',
      titleTe: 'దరఖాస్తు ట్రాకింగ్',
      titleHi: 'आवेदन ट्रैकिंग',
      descEn: 'Live status lookups',
      descTe: 'లైవ్ స్టేటస్ పరిశీలన',
      descHi: 'लाइव स्थिति ट्रैकिंग'
    },
    {
      icon: HeartHandshake,
      titleEn: 'Citizen-Friendly Guidance',
      titleTe: 'ప్రజాహిత మార్గదర్శకత్వం',
      titleHi: 'नागरिक-अनुकूल सहायता',
      descEn: 'Plain language explanations',
      descTe: 'సులువైన వివరణలు',
      descHi: 'सरल भाषा में जानकारी'
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-5 sm:py-6 shadow-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Left Title Label */}
          <div className="flex items-center space-x-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0A2540]">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                {lang === 'te' ? 'విశ్వసనీయ పౌర వేదిక' : lang === 'hi' ? 'विश्वसनीय नागरिक मंच' : 'Civic Trust Framework'}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                {lang === 'te' 
                  ? 'అధికారిక ప్రభుత్వ సేవా మార్గాల ఆధారంగా రూపొందించబడింది' 
                  : lang === 'hi' 
                  ? 'आधिकारिक सरकारी सेवा मार्गों पर आधारित' 
                  : 'Built around official government service pathways'}
              </h3>
            </div>
          </div>

          {/* Badges Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center gap-2 sm:gap-3">
            {badges.map((b, idx) => {
              const Icon = b.icon;
              const title = lang === 'te' ? b.titleTe : lang === 'hi' ? b.titleHi : b.titleEn;
              return (
                <div 
                  key={idx}
                  className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition group"
                >
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-[10px] font-bold">
                    ✓
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-slate-800 group-hover:text-[#0A2540] truncate block">
                      {title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clear Government Distinction Notice */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <p>
            <span className="font-semibold text-slate-700">Notice:</span> GovFlow.AI is an independent citizen-guidance platform. Official applications, fee payments, and decisions are executed on respective department portals (MeeSeva, GSWS, CCLA).
          </p>
          <span className="hidden sm:inline-flex items-center text-blue-700 font-medium shrink-0 ml-3">
            Verified for Andhra Pradesh
          </span>
        </div>
      </div>
    </section>
  );
};
