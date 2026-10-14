import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  AlertCircle, 
  Globe2, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface VideoSectionProps {
  onSelectIncomeJourney?: () => void;
  onExploreServices?: () => void;
  onOpenDocuments?: () => void;
  onOpenTrack?: () => void;
  onPrintDocket?: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ 
  onSelectIncomeJourney,
  onExploreServices,
  onOpenDocuments,
  onOpenTrack,
  onPrintDocket
}) => {
  const { lang, setLang } = useLanguage();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Track availability of each language file
  const [availableVideos, setAvailableVideos] = useState<Record<string, boolean>>({
    en: true,
    te: false,
    hi: false,
  });
  const [resolvedVideoSrc, setResolvedVideoSrc] = useState<string>('/videos/govflow-explainer-en.mp4');
  const [isCheckingVideo, setIsCheckingVideo] = useState(false);

  // Check language-specific MP4 availability on server (supports both explainer and how-it-works naming)
  useEffect(() => {
    let isMounted = true;
    const checkFile = async () => {
      setIsCheckingVideo(true);
      const candidates = [
        `/videos/govflow-explainer-${lang}.mp4`,
        `/videos/govflow-how-it-works-${lang}.mp4`
      ];

      let foundSrc: string | null = null;
      for (const path of candidates) {
        try {
          const res = await fetch(path, { method: 'HEAD' });
          if (res.ok && res.status === 200) {
            foundSrc = path;
            break;
          }
        } catch {
          // Continue checking next candidate
        }
      }

      if (isMounted) {
        if (foundSrc) {
          setResolvedVideoSrc(foundSrc);
          setAvailableVideos(prev => ({ ...prev, [lang]: true }));
        } else {
          setAvailableVideos(prev => ({ ...prev, [lang]: false }));
        }
        setIsCheckingVideo(false);
      }
    };
    checkFile();
    return () => { isMounted = false; };
  }, [lang]);

  // When language changes:
  // 1. Pause current video
  // 2. Change video source (via React key / src)
  // 3. Reload video
  // 4. Reset playback to 0
  // 5. Update captions
  // 6. Keep correct poster
  // 7. Allow user to press Play again
  // Do NOT automatically start new video with sound
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
    setIsPlaying(false);
    setHasStarted(false);
    setHasError(false);
  }, [lang]);

  const handleStartPlay = () => {
    setHasStarted(true);
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Video playback start error:", err);
      });
    }
  };

  const handleRetry = () => {
    setHasError(false);
    setErrorMessage('');
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch((err) => {
        console.error("Retry playback error:", err);
        setHasError(true);
      });
    }
  };

  const isCurrentLangAvailable = availableVideos[lang] ?? false;

  return (
    <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-[#0A2540] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>CIVIC EXPLAINER TUTORIAL</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
          HOW GOVFLOW.AI WORKS
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
          Confused about where to start? See how GovFlow.AI turns your goal into a clear government-service journey.
        </p>

        {/* Language Selection Chips for Video */}
        <div className="flex items-center justify-center space-x-2 pt-2">
          <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center space-x-1">
            <Globe2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Audio Track:</span>
          </span>
          {[
            { id: 'en', label: 'English', available: availableVideos.en },
            { id: 'te', label: 'తెలుగు (Telugu)', available: availableVideos.te },
            { id: 'hi', label: 'हिन्दी (Hindi)', available: availableVideos.hi },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLang(item.id as 'en' | 'te' | 'hi')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition border flex items-center space-x-1.5 ${
                lang === item.id
                  ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span>{item.label}</span>
              {!item.available && (
                <span className="text-[9px] bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-normal">
                  Soon
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Real HTML5 Video Player Container */}
      <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col justify-center items-center">
        {/* Case A: Current language video is NOT available on server yet (e.g. Telugu / Hindi) */}
        {!isCheckingVideo && !isCurrentLangAvailable ? (
          <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Globe2 className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === 'te' 
                  ? 'Video in Telugu is coming soon.' 
                  : lang === 'hi' 
                  ? 'Video in Hindi is coming soon.' 
                  : 'Video is coming soon.'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {lang === 'te' 
                  ? 'తెలుగు ఆడియో వివరణ వీడియో త్వరలో సిద్ధమవుతోంది. ప్రస్తుతం మీరు పూర్తి వీడియోను ఇంగ్లీషులో వీక్షించవచ్చు.'
                  : lang === 'hi' 
                  ? 'हिन्दी ऑडियो व्याख्या वीडियो जल्द ही उपलब्ध होगा। आप अभी अंग्रेजी में पूरा वीडियो देख सकते हैं।'
                  : 'The multilingual narration video is being prepared. You can watch the full explainer in English.'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setLang('en')}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition shadow-lg shadow-blue-500/25"
            >
              <span>Watch in English</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : hasError ? (
          /* Error State: "Video could not be loaded." + "Please try again." + Retry */
          <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 max-w-md mx-auto z-30">
            <div className="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <AlertCircle className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">
                Video could not be loaded.
              </h3>
              <p className="text-xs text-slate-400">
                Please try again.
              </p>
              {errorMessage && (
                <p className="text-[11px] text-slate-500 font-mono mt-1">
                  {errorMessage}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={handleRetry}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition border border-white/20"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
          </div>
        ) : (
          /* Real HTML5 <video> Element */
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              poster="/images/govflow-video-poster.jpg"
              className="w-full h-full object-contain"
              onLoadedMetadata={() => setHasError(false)}
              onCanPlay={() => setHasError(false)}
              onError={(e) => {
                const target = e.currentTarget;
                const error = target.error;
                const msg = error ? `Code ${error.code}: ${error.message}` : 'Media load failure';
                console.error("Video load error:", msg);
                setHasError(true);
                setErrorMessage(msg);
              }}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source
                key={resolvedVideoSrc}
                src={resolvedVideoSrc}
                type="video/mp4"
              />
              <track
                key={`track-${lang}`}
                kind="subtitles"
                src={`/captions/govflow-${lang}.vtt`}
                srcLang={lang}
                label={lang === 'te' ? 'తెలుగు' : lang === 'hi' ? 'हिन्दी' : 'English'}
                default
              />
              Your browser does not support the video tag.
            </video>

            {/* Professional Poster & Play Button Overlay (shown before user clicks Play) */}
            {!hasStarted && (
              <div 
                className="absolute inset-0 z-20 flex flex-col items-center justify-between p-6 sm:p-8 transition-opacity duration-300 pointer-events-auto"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(10, 37, 64, 0.45), rgba(0, 0, 0, 0.7)), url('/images/govflow-video-poster.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Top Badge */}
                <div className="w-full flex justify-between items-center text-white">
                  <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Official Explainer Video</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold border border-white/10 text-slate-300">
                    Captions (CC)
                  </div>
                </div>

                {/* Center Play Button */}
                <button
                  type="button"
                  onClick={handleStartPlay}
                  aria-label="Play How GovFlow.AI Works Video"
                  className="group/btn relative flex items-center justify-center cursor-pointer transition transform hover:scale-105 active:scale-95 focus:outline-none"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center shadow-2xl group-hover/btn:from-amber-400 group-hover/btn:to-amber-300 transition-all duration-300">
                    <Play className="w-9 h-9 sm:w-11 sm:h-11 fill-current ml-1" />
                  </div>
                  <div className="absolute -inset-2 rounded-full border-2 border-amber-400/40 animate-ping pointer-events-none" />
                </button>

                {/* Poster Heading & Subtext */}
                <div className="text-center space-y-1.5 max-w-xl mx-auto pb-1">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
                    How GovFlow.AI Works
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow-sm font-medium">
                    From your goal to your government-service journey.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Below Video: Understand, Navigate, Track */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 max-w-4xl mx-auto">
        <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-center space-y-1">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
            Understand
          </span>
          <h4 className="text-sm font-bold text-slate-900">Know what you need.</h4>
          <p className="text-xs text-slate-600">
            Clear document checklists, eligibility criteria, and fee schedules upfront.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 text-center space-y-1">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
            Navigate
          </span>
          <h4 className="text-sm font-bold text-slate-900">Find the right next step.</h4>
          <p className="text-xs text-slate-600">
            Direct routing to authorized official MeeSeva and GSWS portals.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-center space-y-1">
          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
            Track
          </span>
          <h4 className="text-sm font-bold text-slate-900">Keep your journey organized.</h4>
          <p className="text-xs text-slate-600">
            Follow progress transparently from submission to final digital approval.
          </p>
        </div>
      </div>
    </section>
  );
};
