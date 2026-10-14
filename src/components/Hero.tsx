import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  Mic, 
  MicOff, 
  Paperclip, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  ChevronRight,
  User,
  Sparkles,
  FileText,
  ExternalLink,
  Send,
  Activity,
  Loader2
} from 'lucide-react';
import { Hero3DBackground } from './Hero3DBackground';

interface HeroProps {
  onSearchGoal: (query: string) => void;
  onOpenUploadModal: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onSearchGoal, 
  onOpenUploadModal,
  onExploreServices 
}) => {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // 3D Background Interactive State
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Rotating examples specified in prompt
  const rotatingPlaceholdersEn = [
    'I want to apply for a caste certificate',
    'I want to apply for Jnanabhumi Post-Matric Scholarship & Fee Reimbursement',
    'I want to check my land records',
    'I want to apply for a new electricity connection',
    'I want to get a birth certificate'
  ];

  const rotatingPlaceholdersTe = [
    'నాకు నూతన కుల ధ్రువీకరణ పత్రం (Caste Certificate) కావాలి',
    'జ్ఞానభూమి పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్ & విద్యా దీవెన కొరకు దరఖాస్తు చేయాలి',
    'మీభూమిలో నా భూమి రికార్డులు (అడంగల్) చూసుకోవాలి',
    'నూతన గృహ విద్యుత్ మీటర్ కనెక్షన్ తీసుకోవాలి',
    'జనన ధ్రువీకరణ పత్రం (పుట్టిన తేదీ సర్టిఫికెట్) కావాలి'
  ];

  const rotatingPlaceholdersHi = [
    'मुझे जाति प्रमाण पत्र के लिए आवेदन करना है',
    'मुझे ज्ञानभूमि पोस्ट-मैट्रिक छात्रवृत्ति और शुल्क प्रतिपूर्ति के लिए आवेदन करना है',
    'मुझे अपने भूमि अभिलेख (अडंगल) जांचने हैं',
    'मुझे नया बिजली कनेक्शन लेना है',
    'मुझे जन्म प्रमाण पत्र प्राप्त करना है'
  ];

  const currentPlaceholders = 
    lang === 'te' 
      ? rotatingPlaceholdersTe 
      : lang === 'hi' 
      ? rotatingPlaceholdersHi 
      : rotatingPlaceholdersEn;

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % currentPlaceholders.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [currentPlaceholders.length]);

  // Execute goal journey search with 550ms 3D transition
  const executeGoalWithTransition = (targetQuery: string) => {
    const finalQuery = targetQuery.trim() || currentPlaceholders[placeholderIndex];
    setIsTransitioning(true);
    setTimeout(() => {
      onSearchGoal(finalQuery);
      setIsTransitioning(false);
    }, 550);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeGoalWithTransition(query);
  };

  const handleQuickGoal = (goalText: string) => {
    setQuery(goalText);
    executeGoalWithTransition(goalText);
  };

  // Native SpeechRecognition support
  const handleVoiceToggle = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      if (isListening) {
        setIsListening(false);
      } else {
        try {
          const recognition = new SpeechRecognition();
          recognition.lang = lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
          recognition.interimResults = false;
          recognition.maxAlternatives = 1;

          recognition.onstart = () => setIsListening(true);
          recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setQuery(transcript);
            setIsListening(false);
            executeGoalWithTransition(transcript);
          };
          recognition.onerror = () => setIsListening(false);
          recognition.onend = () => setIsListening(false);
          recognition.start();
        } catch {
          setIsListening(false);
        }
      }
    } else {
      alert(t.voiceNotSupported || 'Voice search is not supported in this browser.');
    }
  };

  const suggestedChips = [
    {
      id: 'caste',
      en: 'Caste Certificate',
      te: 'కుల ధ్రువీకరణ',
      hi: 'जाति प्रमाण पत्र',
      query: 'I want to apply for a caste certificate'
    },
    {
      id: 'scholarship',
      en: 'Jnanabhumi Scholarship',
      te: 'జ్ఞానభూమి స్కాలర్‌షిప్',
      hi: 'ज्ञानभूमि छात्रवृत्ति',
      query: 'I want to apply for Jnanabhumi Post-Matric Scholarship & Fee Reimbursement'
    },
    {
      id: 'land',
      en: 'Land Records',
      te: 'భూ రికార్డులు',
      hi: 'भूमि अभिलेख',
      query: 'I want to check my land records'
    },
    {
      id: 'electricity',
      en: 'Electricity Connection',
      te: 'విద్యుత్ కనెక్షన్',
      hi: 'बिजली कनेक्शन',
      query: 'I want to apply for a new electricity connection'
    },
    {
      id: 'birth',
      en: 'Birth Certificate',
      te: 'జనన ధ్రువీకరణ',
      hi: 'जन्म प्रमाण पत्र',
      query: 'I want to get a birth certificate'
    },
    {
      id: 'ration',
      en: 'Ration / Rice Card',
      te: 'బియ్యం కార్డు',
      hi: 'राशन कार्ड',
      query: 'I want to apply for a new AP Rice Card'
    }
  ];

  // Visual flow sequence representing citizen journey
  const flowSequence = [
    { label: 'Citizen', icon: User },
    { label: 'GovFlow.AI', icon: Sparkles },
    { label: 'Documents', icon: FileText },
    { label: 'Official Portal', icon: ExternalLink },
    { label: 'Application', icon: Send },
    { label: 'Tracking', icon: Activity },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]/50 pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-slate-200/80">
      {/* Premium 3D Animated Hero Background (Three.js WebGL canvas) */}
      <Hero3DBackground 
        isFocused={isSearchFocused}
        query={query}
        hoveredCategory={hoveredCategory}
        isTransitioning={isTransitioning}
      />

      {/* Subtle civic watermark / light pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:24px_24px] z-0"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Universal Pathway: Visual Flow Strip */}
        <div className="hidden lg:flex items-center justify-center space-x-2 py-1.5 px-4 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-2xs max-w-2xl mx-auto mb-8">
          <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mr-1">
            Universal Pathway:
          </span>
          {flowSequence.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={idx}>
                <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-700">
                  <Icon className="w-3 h-3 text-blue-600" />
                  <span>{step.label}</span>
                </div>
                {idx < flowSequence.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-slate-300" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Copy, Search Input, and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 backdrop-blur-xs border border-blue-200/80 text-xs font-semibold text-[#0A2540] shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Verified Government of Andhra Pradesh Framework</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="hidden sm:inline text-slate-600">Revenue • MeeSeva • GSWS • CCLA</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.12]">
              Government Services,
              <br />
              <span className="text-[#0A2540]">Made Simple.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Tell GovFlow.AI what you want to accomplish. We identify the documents, dependencies, official portals and next steps needed to complete your journey.
            </p>

            {/* Prominent Goal Search Form */}
            <div className="pt-1">
              <form onSubmit={handleSubmit} className="relative">
                <div className={`relative flex flex-col sm:flex-row items-stretch rounded-2xl bg-white p-2 shadow-lg border-2 transition-all duration-200 ${
                  isSearchFocused 
                    ? 'border-blue-600 ring-4 ring-blue-100 shadow-xl' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}>
                  {/* Text Input */}
                  <div className="relative flex-1 flex items-center px-3 py-2 sm:py-2.5">
                    <Search className={`w-5 h-5 mr-2.5 shrink-0 transition-colors ${
                      isSearchFocused ? 'text-blue-600' : 'text-slate-400'
                    }`} />
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                      placeholder={currentPlaceholders[placeholderIndex]}
                      className="w-full text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium focus:outline-none bg-transparent"
                    />
                  </div>

                  {/* Actions inside search bar */}
                  <div className="flex items-center justify-between sm:justify-end space-x-2 px-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    {/* Voice Input */}
                    <button
                      type="button"
                      onClick={handleVoiceToggle}
                      className={`p-2.5 rounded-xl border text-xs font-medium flex items-center transition ${
                        isListening
                          ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                      title={t.voiceInputLabel || 'Voice Search'}
                    >
                      {isListening ? <MicOff className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4 text-slate-600" />}
                    </button>

                    {/* Document Upload Assistant */}
                    <button
                      type="button"
                      onClick={onOpenUploadModal}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
                      title={t.uploadDocLabel || 'Identify by Document'}
                    >
                      <Paperclip className="w-4 h-4 text-slate-600" />
                    </button>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isTransitioning}
                      className="px-5 py-3 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white font-bold text-xs sm:text-sm flex items-center space-x-1.5 transition shadow-sm active:scale-[0.98] disabled:opacity-85"
                    >
                      {isTransitioning ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Mapping Route...</span>
                        </>
                      ) : (
                        <>
                          <span>Build My Journey</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Listening State Banner */}
              {isListening && (
                <div className="mt-2.5 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  <span>Listening... Speak your citizen goal clearly</span>
                </div>
              )}
            </div>

            {/* Primary and Secondary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                disabled={isTransitioning}
                onClick={() => executeGoalWithTransition(query)}
                className="px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-md hover:shadow-lg transition active:scale-[0.98] disabled:opacity-85"
              >
                {isTransitioning ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                    <span>Connecting Official Services...</span>
                  </>
                ) : (
                  <span>Build My Journey →</span>
                )}
              </button>

              {onExploreServices && (
                <button
                  type="button"
                  onClick={onExploreServices}
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0A2540] font-bold text-xs sm:text-sm border border-slate-300 shadow-2xs hover:border-slate-400 transition flex items-center space-x-2"
                >
                  <Compass className="w-4 h-4 text-slate-600" />
                  <span>Explore Services</span>
                </button>
              )}
            </div>

            {/* Quick Suggested Goal Chips (With 3D Micro-Interactions) */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-400 font-medium mr-1 text-[11px]">Popular:</span>
              {suggestedChips.map((chip) => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => handleQuickGoal(chip.query)}
                  onMouseEnter={() => setHoveredCategory(chip.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`px-3 py-1 rounded-lg backdrop-blur-xs border text-xs font-medium transition active:scale-95 shadow-2xs ${
                    hoveredCategory === chip.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white/90 hover:bg-blue-50 text-slate-700 hover:text-[#0A2540] border-slate-200/90'
                  }`}
                >
                  {lang === 'te' ? chip.te : lang === 'hi' ? chip.hi : chip.en}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Very Realistic Citizen Photograph */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Soft decorative ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/10 via-amber-500/10 to-transparent rounded-3xl blur-md pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl group">
                <img
                  src="/images/hero-citizen.jpg"
                  alt="Authentic Indian citizen using a laptop at home to access government services through GovFlow.AI"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />

                {/* Bottom floating badge: Trust & Confidence */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg space-y-1.5">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>An ordinary citizen is using GovFlow.AI</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                    <span>✓ 100% Official Portals</span>
                    <span>✓ No Intermediaries</span>
                    <span>✓ Clear Requirements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
