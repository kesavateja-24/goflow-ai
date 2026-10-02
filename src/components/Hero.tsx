import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  Mic, 
  MicOff, 
  Paperclip, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  FileCheck,
  Building
} from 'lucide-react';

interface HeroProps {
  onSearchGoal: (query: string) => void;
  onOpenUploadModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchGoal, onOpenUploadModal }) => {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Rotating realistic placeholders
  const placeholdersEn = [
    'I want to apply for a new caste certificate',
    'I need an income certificate for college scholarship',
    'I want to check my Meebhoomi Adangal land records',
    'I want to get a new domestic electricity connection',
    'I need a learner licence (LLR) and driving licence',
    'I want to apply for a new AP Rice Card',
    'I want to register a birth certificate',
    'I want to apply for NTR Bharosa pension'
  ];

  const placeholdersTe = [
    'నాకు నూతన కుల ధ్రువీకరణ పత్రం (Caste Certificate) కావాలి',
    'కాలేజీ స్కాలర్‌షిప్ కొరకు ఆదాయ ధ్రువీకరణ పత్రం కావాలి',
    'మీభూమిలో నా పొలం అడంగల్ / 1-బి రికార్డు చూసుకోవాలి',
    'నూతన గృహ విద్యుత్ మీటర్ కనెక్షన్ తీసుకోవాలనుకుంటున్నాను',
    'లెర్నర్ లైసెన్స్ (LLR) మరియు డ్రైవింగ్ లైసెన్స్ కావాలి',
    'కొత్త బియ్యం కార్డు (రేషన్ కార్డు) కొరకు దరఖాస్తు చేయాలి',
    'జనన ధ్రువీకరణ పత్రం (పుట్టిన తేదీ సర్టిఫికెట్) కావాలి',
    'ఎన్టీఆర్ భరోసా వృద్ధాప్య పింఛన్ కొరకు దరఖాస్తు చేయాలి'
  ];

  const currentPlaceholders = lang === 'te' ? placeholdersTe : placeholdersEn;

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % currentPlaceholders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentPlaceholders.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      // Use current rotating placeholder as default if empty
      onSearchGoal(currentPlaceholders[placeholderIndex]);
    } else {
      onSearchGoal(query.trim());
    }
  };

  const handleQuickGoal = (goalText: string) => {
    setQuery(goalText);
    onSearchGoal(goalText);
  };

  // Voice recognition simulation / native SpeechRecognition
  const handleVoiceToggle = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      if (isListening) {
        setIsListening(false);
      } else {
        try {
          const recognition = new SpeechRecognition();
          recognition.lang = lang === 'te' ? 'te-IN' : 'en-IN';
          recognition.interimResults = false;
          recognition.maxAlternatives = 1;

          recognition.onstart = () => setIsListening(true);
          recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setQuery(transcript);
            setIsListening(false);
            onSearchGoal(transcript);
          };
          recognition.onerror = () => setIsListening(false);
          recognition.onend = () => setIsListening(false);
          recognition.start();
        } catch {
          setIsListening(false);
        }
      }
    } else {
      // Fallback: cycle through prompt
      alert(t.voiceNotSupported);
    }
  };

  const suggestedChips = [
    {
      id: 'caste',
      en: 'Caste Certificate',
      te: 'కుల ధ్రువీకరణ పత్రం',
      query: lang === 'te' ? 'కుల ధ్రువీకరణ పత్రం కావాలి' : 'I want to apply for a caste certificate'
    },
    {
      id: 'income',
      en: 'Income for Scholarship',
      te: 'స్కాలర్‌షిప్ ఆదాయ పత్రం',
      query: lang === 'te' ? 'స్కాలర్‌షిప్ కొరకు ఆదాయ పత్రం' : 'I need an income certificate for scholarship'
    },
    {
      id: 'jnanabhumi',
      en: 'Jnanabhumi Post-Matric',
      te: 'జ్ఞానభూమి ఫీజు రీయింబర్స్‌మెంట్',
      query: lang === 'te' ? 'జ్ఞానభూమి పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్' : 'Apply for Jnanabhumi scholarship'
    },
    {
      id: 'meebhoomi',
      en: 'Meebhoomi 1-B Adangal',
      te: 'మీభూమి అడంగల్ రికార్డు',
      query: lang === 'te' ? 'మీభూమి అడంగల్ భూమి రికార్డు' : 'Check Meebhoomi Adangal land records'
    },
    {
      id: 'rice-card',
      en: 'New Rice Card (ePDS)',
      te: 'కొత్త బియ్యం కార్డు',
      query: lang === 'te' ? 'కొత్త బియ్యం కార్డు దరఖాస్తు' : 'Apply for a new Rice Card'
    },
    {
      id: 'electricity',
      en: 'New Electricity Connection',
      te: 'నూతన విద్యుత్ కనెక్షన్',
      query: lang === 'te' ? 'కొత్త విద్యుత్ కనెక్షన్ కావాలి' : 'New domestic electricity connection'
    },
    {
      id: 'dl',
      en: 'Driving Licence (LLR)',
      te: 'డ్రైవింగ్ లైసెన్స్ (LLR)',
      query: lang === 'te' ? 'డ్రైవింగ్ లైసెన్స్ కొరకు దరఖాస్తు' : 'Apply for driving licence LLR'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07192C] via-[#0A2540] to-[#0D3156] text-white pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      {/* Subtle Civic Grid & Architecture Watermark Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Top Civic Trust Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-amber-300 mb-6 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Verified Government of Andhra Pradesh Framework</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="hidden sm:inline text-slate-300">Revenue • MeeSeva • GSWS • CCLA • IGRS</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
          {t.heroHeading}
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-5 text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
          {t.heroSubheading}
        </p>

        {/* Main Orchestration Search Form */}
        <div className="mt-8 sm:mt-10 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative flex flex-col sm:flex-row items-stretch rounded-2xl bg-white p-2 shadow-2xl border-2 border-slate-200 focus-within:border-amber-500 transition-all duration-300 ring-4 ring-black/10">
              {/* Input Area */}
              <div className="relative flex-1 flex items-center px-4 py-2 sm:py-3">
                <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={currentPlaceholders[placeholderIndex]}
                  className="w-full text-slate-900 placeholder:text-slate-400 text-base sm:text-lg font-medium focus:outline-none bg-transparent"
                />
              </div>

              {/* Utility Tools & Submit */}
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
                  title={t.voiceInputLabel}
                >
                  {isListening ? <MicOff className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4 text-slate-600" />}
                </button>

                {/* Upload Document helper */}
                <button
                  type="button"
                  onClick={onOpenUploadModal}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
                  title={t.uploadDocLabel}
                >
                  <Paperclip className="w-4 h-4 text-slate-600" />
                </button>

                {/* Main Action Button */}
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white font-bold text-sm sm:text-base flex items-center space-x-2 transition shadow-md shadow-blue-950/30 active:scale-[0.98] group"
                >
                  <span>{t.buildJourneyBtn}</span>
                </button>
              </div>
            </div>
          </form>

          {/* Listening State Banner */}
          {isListening && (
            <div className="mt-3 px-4 py-2 rounded-lg bg-rose-900/40 border border-rose-500/40 text-rose-200 text-xs sm:text-sm font-medium flex items-center justify-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
              <span>{t.listeningVoice}</span>
            </div>
          )}

          {/* Suggested Goals Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400 font-medium mr-1">{t.suggestedGoalsLabel}</span>
            {suggestedChips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => handleQuickGoal(chip.query)}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition active:scale-95 text-xs font-medium"
              >
                {lang === 'te' ? chip.te : chip.en}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Pillars Value Props */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start space-x-3.5">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full Dependency Graph</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Know which certificates must be obtained first before you file your final application.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start space-x-3.5">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Verified Official Portals</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Every link connects directly to official MeeSeva, GSWS, or Department portals — zero fake URLs.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start space-x-3.5">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Document Intelligence</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Segregated into Mandatory, Conditional, and Supporting with exact issuing authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
