import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Layers, 
  Send 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CitizenStorySectionProps {
  onStartJourney: () => void;
}

export const CitizenStorySection: React.FC<CitizenStorySectionProps> = ({ onStartJourney }) => {
  const { lang } = useLanguage();

  const steps = [
    {
      num: '01',
      titleEn: 'Tell us your goal',
      titleTe: 'మీ లక్ష్యాన్ని తెలియజేయండి',
      titleHi: 'अपना लक्ष्य बताएं',
      descEn: 'Describe what you need in everyday language — whether it’s a caste certificate, higher education scholarship, or an electricity meter.',
      descTe: 'సాధారణ భాషలో మీకు కావలసిన సేవను తెలియజేయండి — కుల ధ్రువీకరణ, స్కాలర్‌షిప్ లేదా విద్యుత్ మీటర్ వంటివి.',
      descHi: 'सरल भाषा में बताएं कि आपको क्या चाहिए — जाति प्रमाण पत्र, छात्रवृत्ति या बिजली कनेक्शन।',
      icon: Send,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      num: '02',
      titleEn: 'Get your personalized journey',
      titleTe: 'వ్యక్తిగతీకరించిన ప్రయాణాన్ని పొందండి',
      titleHi: 'अपनी व्यक्तिगत यात्रा प्राप्त करें',
      descEn: 'GovFlow.AI constructs a dependency-aware plan: which documents to gather first, statutory eligibility criteria, official fees, and timeline.',
      descTe: 'ఏ ధ్రువపత్రాలు ముందుగా సేకరించాలి, ప్రభుత్వ నిబంధనలు, చట్టబద్ధమైన ఫీజులు మరియు సమయ పరిమితితో కూడిన ప్రణాళిక రూపొందుతుంది.',
      descHi: 'पहले कौन से दस्तावेज़ तैयार करने हैं, पात्रता शर्तें, शुल्क और समयसीमा के साथ संपूर्ण योजना।',
      icon: Layers,
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      num: '03',
      titleEn: 'Complete each step with confidence',
      titleTe: 'నమ్మకంతో ప్రతి దశనూ పూర్తి చేయండి',
      titleHi: 'विश्वास के साथ हर कदम पूरा करें',
      descEn: 'Follow direct links to official MeeSeva, GSWS, or Department portals with pre-checked documents and live tracking ready.',
      descTe: 'అన్ని ధ్రువపత్రాలు సిద్ధం చేసుకుని అధికారిక మీసేవ లేదా గ్రామ/వార్డు సచివాలయం పోర్టల్ ద్వారా దరఖాస్తు పూర్తి చేయండి.',
      descHi: 'दस्तावेजों के साथ आधिकारिक मीसेवा या विभाग पोर्टल पर जाएं और आवेदन आसानी से पूरा करें।',
      icon: CheckCircle2,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-white via-slate-50/60 to-blue-50/20 rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xs overflow-hidden relative">
      {/* Decorative background watermarks */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Authentic Citizen Photograph */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative group">
            {/* Soft decorative shadow border */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 to-amber-500/20 rounded-3xl blur-xs group-hover:blur-md transition duration-300" />
            
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
              <img
                src="/images/citizen-story.jpg"
                alt="Authentic Indian citizen and parent reviewing online education scholarship paperwork together on a tablet"
                className="w-full h-[340px] sm:h-[420px] object-cover object-center group-hover:scale-[1.02] transition duration-500"
                loading="lazy"
              />
              
              {/* Overlay Civic Credibility Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-slate-900 block truncate">
                    Real Citizen Experience
                  </span>
                  <span className="text-[11px] text-slate-500 truncate block">
                    Zero confusion • Clear document requirements
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Narrative Story & 3 Steps */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'te' ? 'మార్గదర్శక విధానం' : lang === 'hi' ? 'मार्गदर्शित प्रक्रिया' : 'Guided Civic Navigation'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {lang === 'te' ? 'ఒకే లక్ష్యం. ఒకే స్పష్టమైన ప్రయాణం.' : lang === 'hi' ? 'एक लक्ष्य। एक मार्गदर्शित यात्रा।' : 'One Goal. One Guided Journey.'}
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              {lang === 'te'
                ? 'ప్రభుత్వ సేవలు సాధారణంగా బహుళ పోర్టల్స్, ధ్రువపత్రాలు, ముందస్తు అర్హతలు మరియు వివిధ దరఖాస్తు దశలను కలిగి ఉంటాయి. GovFlow.AI వీటిని ఒకే స్పష్టమైన ప్రయాణంగా మారుస్తుంది, తద్వారా పౌరులు తదుపరి ఏమి చేయాలో సులభంగా అర్థం చేసుకుంటారు.'
                : lang === 'hi'
                ? 'सरकारी सेवाओं में अक्सर कई पोर्टल, दस्तावेज़, पात्रता आवश्यकताएं और आवेदन चरण शामिल होते हैं। GovFlow.AI इस पूरी प्रक्रिया को एक स्पष्ट मार्गदर्शन में जोड़ता है ताकि नागरिक समझ सकें कि आगे क्या करना है।'
                : 'Government services often involve multiple portals, documents, eligibility requirements and application steps. GovFlow.AI brings the journey together so citizens can understand what needs to happen next.'}
            </p>
          </div>

          {/* Three Sequential Steps */}
          <div className="space-y-3.5 pt-1">
            {steps.map((st) => {
              const Icon = st.icon;
              const title = lang === 'te' ? st.titleTe : lang === 'hi' ? st.titleHi : st.titleEn;
              const desc = lang === 'te' ? st.descTe : lang === 'hi' ? st.descHi : st.descEn;

              return (
                <div 
                  key={st.num}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition flex items-start space-x-4"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <span className="text-xs font-black font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      {st.num}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                      <span>{title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onStartJourney}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition active:scale-[0.98]"
            >
              <span>{lang === 'te' ? 'మీ ప్రయాణాన్ని ప్రారంభించండి' : lang === 'hi' ? 'अपनी यात्रा शुरू करें' : 'Build My Journey'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
