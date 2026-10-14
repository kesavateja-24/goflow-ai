import React from 'react';
import { 
  FileCheck2, 
  UserCheck2, 
  GitFork, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DocumentIntelligenceSectionProps {
  onOpenDocuments: () => void;
}

export const DocumentIntelligenceSection: React.FC<DocumentIntelligenceSectionProps> = ({ onOpenDocuments }) => {
  const { lang } = useLanguage();

  const cards = [
    {
      id: 'documents',
      titleEn: 'Documents',
      titleTe: 'అవసరమైన పత్రాలు',
      titleHi: 'आवश्यक दस्तावेज़',
      headlineEn: 'Understand the documents required.',
      headlineTe: 'అవసరమైన పత్రాలను ముందుగానే తెలుసుకోండి.',
      headlineHi: 'आवश्यक दस्तावेजों को पहले से समझें।',
      descEn: 'Identify mandatory proof of identity (Aadhaar e-KYC), address proofs, income self-declaration affidavits, and educational transfer certificates before visiting offices.',
      descTe: 'ఆధార్ ఈ-కేవైసీ, నివాస ధ్రువీకరణ, గెజిటెడ్ అఫిడవిట్ మరియు మునుపటి విద్యా పత్రాలను కార్యాలయానికి వెళ్లక ముందే సిద్ధం చేసుకోండి.',
      descHi: 'आधार ई-केवाईसी, पते का प्रमाण, आय शपथ पत्र और शैक्षणिक प्रमाण पत्र पहले से तैयार करें।',
      icon: FileCheck2,
      badgeEn: 'Mandatory vs Optional',
      badgeTe: 'తప్పనిసరి & అదనపు',
      color: 'blue'
    },
    {
      id: 'eligibility',
      titleEn: 'Eligibility',
      titleTe: 'అర్హత నిబంధనలు',
      titleHi: 'पात्रता की शर्तें',
      headlineEn: 'Check important eligibility conditions.',
      headlineTe: 'ముఖ్యమైన అర్హత నిబంధనలను తనిఖీ చేయండి.',
      headlineHi: 'महत्वपूर्ण पात्रता शर्तों की जांच करें।',
      descEn: 'Verify household annual income ceilings (rural vs urban limits), wetland and dryland agricultural thresholds, and local candidate rules under AP gazettes.',
      descTe: 'గ్రామీణ, పట్టణ వార్షిక ఆదాయ పరిమితులు, సాగుభూమి విస్తీర్ణం మరియు స్థానిక అభ్యర్థిత్వ నిబంధనలను అధికారిక గెజిట్ ప్రకారం నిర్ధారించుకోండి.',
      descHi: 'वार्षिक पारिवारिक आय सीमा, कृषि भूमि सीमा और स्थानीय स्थिति नियमों का मिलान करें।',
      icon: UserCheck2,
      badgeEn: 'Statutory Gazette Criteria',
      badgeTe: 'ప్రభుత్వ గెజిట్ నిబంధనలు',
      color: 'amber'
    },
    {
      id: 'dependencies',
      titleEn: 'Dependencies',
      titleTe: 'ముందస్తు అవసరాలు',
      titleHi: 'पूर्व-आवश्यकताएं',
      headlineEn: 'Know which service must happen first.',
      headlineTe: 'ఏ సేవ ముందుగా పొందాలో తెలుసుకోండి.',
      headlineHi: 'जानें कि कौन सी सेवा पहले पूरी करनी होगी।',
      descEn: 'Prevent application rejections. Know if your scholarship requires an Income Certificate beforehand, or if property mutation requires an updated 1-B Adangal.',
      descTe: 'దరఖాస్తు తిరస్కరణలను నివారించండి. స్కాలర్‌షిప్‌కు ఆదాయ పత్రం ముందస్తుగా అవసరమా, భూమి మ్యుటేషన్‌కు అడంగల్ రికార్డు అవసరమా అనేది స్పష్టంగా తెలుస్తుంది.',
      descHi: 'आवेदन खारिज होने से बचें। जानें कि क्या छात्रवृत्ति के लिए पहले आय प्रमाण पत्र की आवश्यकता है।',
      icon: GitFork,
      badgeEn: 'Prerequisite Graph (DAG)',
      badgeTe: 'దశలవారీ అనుసంధానం',
      color: 'emerald'
    }
  ];

  return (
    <section className="bg-slate-50/70 rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Document Intelligence</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Know What You Need Before You Apply
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Eliminate repeated office visits and rejected applications by reviewing comprehensive document checklists, eligibility criteria, and prerequisites in advance.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenDocuments}
          className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold text-[#0A2540] transition shadow-xs shrink-0 self-start sm:self-auto"
        >
          <span>Open Document Assistant</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3 Intelligence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          const title = lang === 'te' ? card.titleTe : lang === 'hi' ? card.titleHi : card.titleEn;
          const headline = lang === 'te' ? card.headlineTe : lang === 'hi' ? card.headlineHi : card.headlineEn;
          const desc = lang === 'te' ? card.descTe : lang === 'hi' ? card.descHi : card.descEn;
          const badge = lang === 'te' ? card.badgeTe : card.badgeEn;

          const colorStyles = {
            blue: 'bg-blue-50 text-blue-700 border-blue-200',
            amber: 'bg-amber-50 text-amber-700 border-amber-200',
            emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200'
          }[card.color];

          return (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition duration-200 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${colorStyles} shadow-2xs group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                    {badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                    {title}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 leading-snug">
                    {headline}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                <span>Detailed checklists available in journey</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
