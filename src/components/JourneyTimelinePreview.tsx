import React from 'react';
import { 
  ArrowRight, 
  Search, 
  UserCheck, 
  FileText, 
  ExternalLink, 
  Send, 
  Activity, 
  CheckCircle, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface JourneyTimelinePreviewProps {
  onStartJourney: () => void;
}

export const JourneyTimelinePreview: React.FC<JourneyTimelinePreviewProps> = ({ onStartJourney }) => {
  const { lang } = useLanguage();

  const timelineNodes = [
    {
      step: '01',
      titleEn: 'Your Goal',
      titleTe: 'మీ లక్ష్యం',
      titleHi: 'आपका लक्ष्य',
      subEn: 'Plain language intent',
      subTe: 'సాధారణ మాటల్లో',
      icon: Search,
      color: 'bg-blue-600 text-white',
      badge: 'Start'
    },
    {
      step: '02',
      titleEn: 'Eligibility Check',
      titleTe: 'అర్హత పరిశీలన',
      titleHi: 'पात्रता जांच',
      subEn: 'Income & residence limits',
      subTe: 'ఆదాయ & నివాస నిబంధనలు',
      icon: UserCheck,
      color: 'bg-[#0A2540] text-white',
      badge: 'Rules'
    },
    {
      step: '03',
      titleEn: 'Documents',
      titleTe: 'పత్రాల సేకరణ',
      titleHi: 'दस्तावेज़ तैयारी',
      subEn: 'Checklist & dependencies',
      subTe: 'తప్పనిసరి ధ్రువపత్రాలు',
      icon: FileText,
      color: 'bg-amber-600 text-white',
      badge: 'Checklist'
    },
    {
      step: '04',
      titleEn: 'Official Portal',
      titleTe: 'అధికారిక పోర్టల్',
      titleHi: 'आधिकारिक पोर्टल',
      subEn: 'MeeSeva / GSWS Gateway',
      subTe: 'మీసేవ లేదా సచివాలయం',
      icon: ExternalLink,
      color: 'bg-indigo-600 text-white',
      badge: 'Gateway'
    },
    {
      step: '05',
      titleEn: 'Application',
      titleTe: 'దరఖాస్తు సమర్పణ',
      titleHi: 'आवेदन प्रस्तुत',
      subEn: 'Online or Village desk',
      subTe: 'ఆన్‌లైన్ లేదా సచివాలయం',
      icon: Send,
      color: 'bg-cyan-700 text-white',
      badge: 'Submit'
    },
    {
      step: '06',
      titleEn: 'Tracking',
      titleTe: 'లైవ్ ట్రాకింగ్',
      titleHi: 'ट्रैकिंग',
      subEn: 'Real-time status updates',
      subTe: 'దశలవారీ పరిశీలన',
      icon: Activity,
      color: 'bg-purple-600 text-white',
      badge: 'Status'
    },
    {
      step: '07',
      titleEn: 'Completion',
      titleTe: 'పూర్తయింది',
      titleHi: 'सफल समापन',
      subEn: 'Digitally signed certificate',
      subTe: 'అధికారిక ధ్రువీకరణ పత్రం',
      icon: CheckCircle,
      color: 'bg-emerald-600 text-white',
      badge: 'Done'
    },
  ];

  return (
    <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xs space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-[#0A2540] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Universal Citizen Pathway</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          How Every Government Journey Unfolds
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          From your initial requirement to a digitally signed government outcome, here is the transparent seven-stage pathway designed for every citizen.
        </p>
      </div>

      {/* Horizontal / Responsive Timeline */}
      <div className="relative pt-4">
        {/* Desktop connection line */}
        <div className="hidden lg:block absolute top-12 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-500 rounded-full z-0 opacity-40" />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 relative z-10">
          {timelineNodes.map((node, i) => {
            const Icon = node.icon;
            const title = lang === 'te' ? node.titleTe : lang === 'hi' ? node.titleHi : node.titleEn;
            const sub = lang === 'te' ? node.subTe : node.subEn;

            return (
              <div
                key={node.step}
                className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-blue-400 p-4 flex flex-col items-center text-center shadow-2xs hover:shadow-md transition-all duration-200 group"
              >
                {/* Node icon pill */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${node.color} shadow-sm mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>

                <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-wider mb-1">
                  Step {node.step}
                </span>

                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0A2540] leading-snug">
                  {title}
                </h4>

                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {sub}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-200/60 w-full flex items-center justify-center">
                  <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
                    {node.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          onClick={onStartJourney}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition active:scale-[0.98]"
        >
          <span>Build My Journey →</span>
        </button>

        <span className="text-xs text-slate-500 font-medium">
          Instant orchestration • No login required to view roadmaps
        </span>
      </div>
    </section>
  );
};
