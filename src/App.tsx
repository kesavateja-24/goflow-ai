import React, { useState, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { LanguageModal } from './components/LanguageModal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClarificationModal } from './components/ClarificationModal';
import { ProcessingStage } from './components/ProcessingStage';
import { CompleteJourney } from './components/CompleteJourney';
import { SearchSection } from './components/SearchSection';
import { CategoryExplorer } from './components/CategoryExplorer';
import { DocumentAssistant } from './components/DocumentAssistant';
import { TrackApplicationModal } from './components/TrackApplicationModal';
import { UploadDocModal } from './components/UploadDocModal';
import { PrivacyModal } from './components/PrivacyModal';
import { DocumentDetailModal } from './components/DocumentDetailModal';
import { Civic3DCanvas } from './components/Civic3DCanvas';
import { PrintableDocket } from './components/PrintableDocket';
import { Footer } from './components/Footer';
import { GovflowOrchestrator } from './api/orchestrator';
import { AP_VERIFIED_SERVICES } from './data/services';
import { ServiceRecord, CitizenProfile, IntentAnalysisResult, DocumentItem } from './types';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck2, 
  HelpCircle, 
  Search, 
  Building2, 
  Scale, 
  Layers 
} from 'lucide-react';

export const AppContent: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  const [currentView, setCurrentView] = useState<'home' | 'explore' | 'journey' | 'documents' | 'track'>('home');
  const [activeServiceId, setActiveServiceId] = useState<string>('ap-caste-cert');
  
  // Citizen profile
  const [profile, setProfile] = useState<CitizenProfile>(() => {
    const savedDistrict = localStorage.getItem('govflow_district') || 'guntur';
    const savedLoc = (localStorage.getItem('govflow_loctype') as 'rural' | 'urban') || 'rural';
    return {
      district: savedDistrict,
      locationType: savedLoc,
      preferredLanguage: lang
    };
  });

  // Held documents list
  const [heldDocIds, setHeldDocIds] = useState<string[]>(['doc-aadhaar']);

  // Modals and orchestration flow states
  const [pendingIntent, setPendingIntent] = useState<IntentAnalysisResult | null>(null);
  const [isClarificationOpen, setIsClarificationOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [selectedDocForDetail, setSelectedDocForDetail] = useState<DocumentItem | null>(null);
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  // URL Hash routing check on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('service=')) {
      const match = hash.match(/service=([^&]+)/);
      if (match && match[1]) {
        const found = AP_VERIFIED_SERVICES.find(s => s.id === match[1]);
        if (found) {
          setActiveServiceId(found.id);
          setCurrentView('journey');
        }
      }
    }
  }, []);

  const activeService = GovflowOrchestrator.generateJourney(activeServiceId, profile, heldDocIds) || AP_VERIFIED_SERVICES[0];

  // Handle Goal Search from Hero
  const handleSearchGoal = (userGoal: string) => {
    setSearchFeedback(null);
    const intentResult = GovflowOrchestrator.analyzeIntent(userGoal);
    if (!intentResult) {
      setSearchFeedback(`No verified Andhra Pradesh service found matching "${userGoal}". Please try describing your goal (e.g. caste certificate, scholarship, electricity connection, adangal).`);
      return;
    }

    setPendingIntent(intentResult);
    // Show quick 2-question clarification for administrative routing
    setIsClarificationOpen(true);
  };

  // Confirm Clarification & Start Orchestration
  const handleConfirmClarification = (newProfile: CitizenProfile) => {
    setProfile(newProfile);
    localStorage.setItem('govflow_district', newProfile.district);
    localStorage.setItem('govflow_loctype', newProfile.locationType);
    setIsClarificationOpen(false);

    if (pendingIntent) {
      setActiveServiceId(pendingIntent.matchedService.id);
    }
    // Launch realistic multi-stage processing
    setIsProcessing(true);
  };

  const handleProcessingComplete = () => {
    setIsProcessing(false);
    setCurrentView('journey');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Held Documents (I already have these documents)
  const handleToggleHeldDoc = (docId: string) => {
    setHeldDocIds(prev =>
      prev.includes(docId) ? prev.filter(id => id !== docId) : [...prev, docId]
    );
  };

  // Handle Direct Service Selection from Explorer / Search
  const handleSelectService = (serviceId: string) => {
    setActiveServiceId(serviceId);
    setCurrentView('journey');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Print Docket
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. First Screen Language Selection Modal */}
      <LanguageModal />

      {/* 2. Top Header Navigation */}
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          if (view === 'track') {
            setIsTrackModalOpen(true);
          } else {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        hasActiveJourney={Boolean(activeServiceId)}
        selectedDistrict={profile.district}
        onDistrictChange={(distId) => {
          setProfile(p => ({ ...p, district: distId }));
          localStorage.setItem('govflow_district', distId);
        }}
        onPrint={handlePrint}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
      />

      {/* Print Docket Container (Hidden on screen, shown in print) */}
      <PrintableDocket
        service={activeService}
        profile={profile}
        heldDocIds={heldDocIds}
      />

      {/* Main Content Areas */}
      <main className="flex-1 print-hide">
        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <div className="space-y-12 pb-20">
            {/* Hero Section */}
            <Hero
              onSearchGoal={handleSearchGoal}
              onOpenUploadModal={() => setIsUploadModalOpen(true)}
            />

            {/* Search Feedback / Error Notification if any */}
            {searchFeedback && (
              <div className="max-w-3xl mx-auto px-4">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <strong>Official Verification Notice:</strong> {searchFeedback}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSearchFeedback(null)}
                    className="text-amber-700 font-bold hover:underline"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            {/* Simulated AI Processing Stages */}
            {isProcessing && (
              <div className="px-4">
                <ProcessingStage onComplete={handleProcessingComplete} />
              </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              {/* How GovFlow Works */}
              <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    {t.howGovflowWorks}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    Six Deterministic Steps to Public Service Delivery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2">
                    We eliminate guesswork by bridging the gap between citizen eligibility and official government approval.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                  {[
                    { step: '01', title: 'Goal', desc: 'Identify citizen statutory intent' },
                    { step: '02', title: 'Understand', desc: 'Profile location & category constraints' },
                    { step: '03', title: 'Verify', desc: 'Cross-check real AP Gazette & orders' },
                    { step: '04', title: 'Plan', desc: 'Construct dependency-aware DAG' },
                    { step: '05', title: 'Apply', desc: 'Direct submission to MeeSeva/GSWS' },
                    { step: '06', title: 'Track', desc: 'Live status through official portals' },
                  ].map((s) => (
                    <div key={s.step} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-black text-amber-600 font-mono">
                          {s.step}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-1">{s.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Signature 3D Interactive Civic Navigation Canvas */}
              <Civic3DCanvas />

              {/* Popular Citizen Goals & Featured Journeys */}
              <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                      Authoritative Roadmaps
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-0.5">
                      Popular Citizen Service Journeys in AP
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Ready-to-use step-by-step orchestrations with verified department portals.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentView('explore');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#0A2540] hover:text-blue-700 flex items-center space-x-1"
                  >
                    <span>View all 10+ services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {AP_VERIFIED_SERVICES.slice(0, 6).map((service) => {
                    const name = service.serviceName[lang] || service.serviceName.en;
                    const desc = service.description[lang] || service.description.en;

                    return (
                      <div
                        key={service.id}
                        className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                              🟢 Verified AP Service
                            </span>
                            <span className="text-[11px] font-semibold text-slate-400">
                              {service.steps.length} Stages
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {name}
                          </h3>

                          <div className="flex items-center space-x-1 text-xs text-slate-500 mt-1 mb-2">
                            <Building2 className="w-3.5 h-3.5 text-slate-400" />
                            <span className="truncate">{service.department}</span>
                          </div>

                          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                            {desc}
                          </p>
                        </div>

                        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs text-slate-500">
                            Fee: <strong>{service.fees[0] ? service.fees[0].amount : 'Free'}</strong>
                          </span>

                          <button
                            type="button"
                            onClick={() => handleSelectService(service.id)}
                            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-xs font-bold transition shadow-xs"
                          >
                            <span>Open Journey →</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Service Categories Explorer */}
              <CategoryExplorer
                onSelectCategory={() => setCurrentView('explore')}
                onSelectService={handleSelectService}
              />

              {/* Trust & Public Infrastructure Banner */}
              <section className="bg-gradient-to-r from-[#0A2540] via-[#0D3862] to-[#0A2540] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700">
                <div className="max-w-3xl space-y-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.trustTitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Never Guessing. Always Connected to Official Gateways.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t.trustDesc} Every step connects with <code>onlineap.meeseva.gov.in</code>, <code>gramawardsachivalayam.ap.gov.in</code>, <code>ccla.ap.gov.in</code>, and statutory portals.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setIsPrivacyModalOpen(true)}
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition shadow-md"
                    >
                      Read Public Privacy Charter
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsTrackModalOpen(true)}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition border border-white/20"
                    >
                      Track Active Application ↗
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* VIEW 2: COMPLETE JOURNEY */}
        {currentView === 'journey' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
            {/* Top Back / Breadcrumb Nav */}
            <div className="flex items-center justify-between pb-2">
              <button
                type="button"
                onClick={() => setCurrentView('home')}
                className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center space-x-1 p-1 rounded-lg hover:bg-slate-100 transition"
              >
                <span>{t.backBtn}</span>
                <span>to Citizen Overview</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentView('explore')}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Browse other services →
              </button>
            </div>

            {/* Complete Orchestrated Journey Component */}
            <CompleteJourney
              service={activeService}
              profile={profile}
              heldDocIds={heldDocIds}
              onToggleHeldDoc={handleToggleHeldDoc}
              onPrint={handlePrint}
              onOpenDocModal={(doc) => setSelectedDocForDetail(doc)}
            />
          </div>
        )}

        {/* VIEW 3: EXPLORE SERVICES & SEARCH */}
        {currentView === 'explore' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
            <SearchSection onSelectService={handleSelectService} />
            <CategoryExplorer
              onSelectCategory={() => {}}
              onSelectService={handleSelectService}
            />
          </div>
        )}

        {/* VIEW 4: DOCUMENTS ASSISTANT */}
        {currentView === 'documents' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
            <DocumentAssistant
              onSelectServiceWithDoc={handleSelectService}
              onOpenDocModal={(doc) => setSelectedDocForDetail(doc)}
            />
          </div>
        )}
      </main>

      {/* Clarification Modal for Conversational Administrative Routing */}
      {isClarificationOpen && pendingIntent && (
        <ClarificationModal
          intent={pendingIntent}
          initialDistrict={profile.district}
          initialLocationType={profile.locationType}
          onConfirm={handleConfirmClarification}
          onCancel={() => setIsClarificationOpen(false)}
        />
      )}

      {/* Official Tracking Modal */}
      {isTrackModalOpen && (
        <TrackApplicationModal onClose={() => setIsTrackModalOpen(false)} />
      )}

      {/* Document Upload / Inspect Modal */}
      {isUploadModalOpen && (
        <UploadDocModal
          onClose={() => setIsUploadModalOpen(false)}
          onSelectDocumentType={(kw) => handleSearchGoal(kw)}
        />
      )}

      {/* Privacy Charter Modal */}
      {isPrivacyModalOpen && (
        <PrivacyModal onClose={() => setIsPrivacyModalOpen(false)} />
      )}

      {/* Deep Document Details Modal */}
      {selectedDocForDetail && (
        <DocumentDetailModal
          document={selectedDocForDetail}
          onClose={() => setSelectedDocForDetail(null)}
        />
      )}

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateExplore={() => {
          setCurrentView('explore');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLanguage={() => {}}
      />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
