import React from 'react';
import { 
  Compass, 
  ExternalLink, 
  FileCheck2, 
  Activity, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyGovflow: React.FC = () => {
  const { lang } = useLanguage();

  const features = [
    {
      num: '01',
      titleEn: 'Clear Guidance',
      titleTe: 'స్పష్టమైన మార్గదర్శకత్వం',
      titleHi: 'स्पष्ट मार्गदर्शन',
      headlineEn: 'Understand every step before you begin.',
      headlineTe: 'ప్రారంభించే ముందే ప్రతి దశను అర్థం చేసుకోండి.',
      headlineHi: 'शुरू करने से पहले हर कदम को समझें।',
      descEn: 'We demystify government circulars, legal acts, and eligibility criteria into human-friendly, plain language steps.',
      descTe: 'ప్రభుత్వ ఉత్తర్వులు, చట్టాలు మరియు అర్హత నిబంధనలను సామాన్య ప్రజలకు అర్థమయ్యే సరళమైన భాషలో వివరిస్తాము.',
      descHi: 'सरकारी आदेशों और कानूनी नियमों को सरल, समझने योग्य चरणों में प्रस्तुत किया गया है।',
      icon: Compass,
      accent: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      num: '02',
      titleEn: 'Official Sources',
      titleTe: 'అధికారిక ఆధారాలు',
      titleHi: 'आधिकारिक स्रोत',
      headlineEn: 'Connect users to the appropriate official portals.',
      headlineTe: 'సరైన అధికారిక పోర్టల్‌లతో పౌరులను అనుసంధానిస్తుంది.',
      headlineHi: 'उपयुक्त आधिकारिक पोर्टल से सीधा संपर्क।',
      descEn: 'Zero fraudulent intermediaries. Direct routing to verified gateways like MeeSeva, GSWS, CCLA, and Transport RTA.',
      descTe: 'ఎలాంటి మధ్యవర్తులు లేకుండా మీసేవ, సచివాలయం, సీసీఎల్ఏ మరియు ఆర్టీఏ వంటి అధికారిక ప్రభుత్వ గేట్‌వేలకు నేరుగా తీసుకెళ్తుంది.',
      descHi: 'बिचौलियों से मुक्ति। मीसेवा, जीएसडब्ल्यूएस, सीसीएलए और आरटीओ जैसे आधिकारिक पोर्टल्स का सीधा लिंक।',
      icon: ExternalLink,
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      num: '03',
      titleEn: 'Document Readiness',
      titleTe: 'పత్రాల సంసిద్ధత',
      titleHi: 'दस्तावेज़ तैयारी',
      headlineEn: 'Know what documents you may need.',
      headlineTe: 'ఏ ధ్రువపత్రాలు అవసరమో ముందే తెలుసుకోండి.',
      headlineHi: 'आवश्यक दस्तावेजों की पहले से पूरी जानकारी।',
      descEn: 'Organized into mandatory proofs, prerequisite certificates, and optional documents so your application is never delayed.',
      descTe: 'తప్పనిసరి పత్రాలు, ముందస్తు సర్టిఫికెట్లు మరియు అదనపు పత్రాల స్పష్టమైన జాబితా ద్వారా దరఖాస్తు తిరస్కరణకు గురికాదు.',
      descHi: 'अनिवार्य और सहायक दस्तावेजों की सटीक सूची ताकि आपका आवेदन कभी अटके नहीं।',
      icon: FileCheck2,
      accent: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    {
      num: '04',
      titleEn: 'Journey Tracking',
      titleTe: 'ప్రయాణ ట్రాకింగ్',
      titleHi: 'यात्रा ट्रैकिंग',
      headlineEn: 'Keep your progress organized in one place.',
      headlineTe: 'మీ దరఖాస్తు పురోగతిని ఒకే చోట సురక్షితంగా ఉంచుకోండి.',
      headlineHi: 'अपनी प्रगति को एक ही स्थान पर व्यवस्थित रखें।',
      descEn: 'Print a personal citizen docket or track multi-department progress across village secretariats, VROs, and Tahsildars.',
      descTe: 'వ్యక్తిగత చెక్‌లిస్ట్‌ను ప్రింట్ చేసుకోండి లేదా సచివాలయం, వీఆర్వో మరియు తహశీల్దార్ స్థాయిలలో దరఖాస్తు స్థితిని పరిశీలించండి.',
      descHi: 'व्यक्तिगत चेकलिस्ट प्रिंट करें या ग्राम सचिवालय और तहसील स्तर पर आवेदन स्थिति देखें।',
      icon: Activity,
      accent: 'text-purple-700 bg-purple-50 border-purple-200'
    },
  ];

  return (
    <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-[#0A2540] uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
          <span>Why GovFlow.AI</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          Designed for Citizen Confidence & Trust
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Four foundational pillars that transform complicated administrative procedures into a transparent, self-guided experience.
        </p>
      </div>

      {/* 4 Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feat) => {
          const Icon = feat.icon;
          const title = lang === 'te' ? feat.titleTe : lang === 'hi' ? feat.titleHi : feat.titleEn;
          const headline = lang === 'te' ? feat.headlineTe : lang === 'hi' ? feat.headlineHi : feat.headlineEn;
          const desc = lang === 'te' ? feat.descTe : lang === 'hi' ? feat.descHi : feat.descEn;

          return (
            <div
              key={feat.num}
              className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black font-mono text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/80">
                    {feat.num}
                  </span>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${feat.accent} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {title}
                </span>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1 leading-snug group-hover:text-[#0A2540]">
                  {headline}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-slate-400 group-hover:text-blue-700 transition">
                <span>Citizen-centric principle</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
