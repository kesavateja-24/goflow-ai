import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Globe2, 
  MapPin, 
  Search, 
  FileText, 
  HelpCircle, 
  Compass, 
  Menu, 
  X, 
  Printer, 
  ShieldCheck, 
  User 
} from 'lucide-react';
import { AP_DISTRICTS } from '../data/districts';

interface HeaderProps {
  onNavigate: (view: 'home' | 'explore' | 'journey' | 'documents' | 'track') => void;
  currentView: string;
  hasActiveJourney?: boolean;
  selectedDistrict?: string;
  onDistrictChange?: (districtId: string) => void;
  onPrint?: () => void;
  onOpenPrivacy?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  currentView,
  hasActiveJourney,
  selectedDistrict,
  onDistrictChange,
  onPrint,
  onOpenPrivacy,
}) => {
  const { lang, setLang, t, openLanguageModal } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [districtDropdownOpen, setDistrictDropdownOpen] = useState(false);

  const currentDistrictObj = AP_DISTRICTS.find(d => d.id === selectedDistrict);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs print-hide">
      {/* Top micro-bar for Government context */}
      <div className="bg-[#0A2540] text-slate-200 text-[11px] py-1 px-4 sm:px-8 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium tracking-wide">
            Government of Andhra Pradesh • Official Citizen Services Knowledge System
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline text-slate-300">
            Citizen Grievance Helpline: <strong className="text-amber-400 font-semibold">1902</strong> (Spandana)
          </span>
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="text-slate-300 hover:text-white underline underline-offset-2 transition"
          >
            Privacy & Sources
          </button>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0A2540] flex items-center justify-center text-white shadow-md border border-amber-500/30 relative">
              <span className="font-extrabold text-lg tracking-wider text-white">GF</span>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 rounded-full border-2 border-white" />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-black text-[#0A2540] tracking-tight">
                  GOVFLOW<span className="text-amber-600">.AI</span>
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-[#0A2540] uppercase tracking-wider">
                  AP Edition
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium hidden sm:block truncate max-w-xs">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                currentView === 'home'
                  ? 'bg-blue-50 text-[#0A2540]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.navHome}
            </button>

            <button
              type="button"
              onClick={() => onNavigate('explore')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                currentView === 'explore'
                  ? 'bg-blue-50 text-[#0A2540]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.navExplore}
            </button>

            {hasActiveJourney && (
              <button
                type="button"
                onClick={() => onNavigate('journey')}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition flex items-center space-x-1.5 ${
                  currentView === 'journey'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'text-amber-700 bg-amber-50 hover:bg-amber-100'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>{t.navMyJourney}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => onNavigate('documents')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                currentView === 'documents'
                  ? 'bg-blue-50 text-[#0A2540]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.navDocuments}
            </button>

            <button
              type="button"
              onClick={() => onNavigate('track')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                currentView === 'track'
                  ? 'bg-blue-50 text-[#0A2540]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.navTrack}
            </button>
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* District Selector Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDistrictDropdownOpen(!districtDropdownOpen)}
                className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 text-xs font-medium transition"
                title="Select District"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span className="max-w-[110px] truncate">
                  {currentDistrictObj ? (lang === 'te' ? currentDistrictObj.nameTe : currentDistrictObj.nameEn) : 'Andhra Pradesh'}
                </span>
              </button>

              {districtDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 max-h-72 overflow-y-auto bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Select Your AP District (26)
                  </div>
                  {AP_DISTRICTS.map(d => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => {
                        if (onDistrictChange) onDistrictChange(d.id);
                        setDistrictDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-blue-50 ${
                        selectedDistrict === d.id ? 'bg-blue-50 font-bold text-[#0A2540]' : 'text-slate-700'
                      }`}
                    >
                      <span>{lang === 'te' ? d.nameTe : d.nameEn}</span>
                      <span className="text-[10px] text-slate-400">{d.headquarters}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Print Docket Button if active */}
            {hasActiveJourney && (
              <button
                type="button"
                onClick={onPrint}
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition"
                title="Print personal checklist"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>{t.downloadPdf}</span>
              </button>
            )}

            {/* Language Switcher Button */}
            <button
              type="button"
              onClick={openLanguageModal}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition shadow-xs"
              title="Change Language"
            >
              <Globe2 className="w-3.5 h-3.5 text-blue-600" />
              <span>
                {lang === 'en' ? '🇬🇧 English' : lang === 'te' ? '🇮🇳 తెలుగు' : '🇮🇳 हिन्दी'}
              </span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <button
            type="button"
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentView === 'home' ? 'bg-blue-50 text-[#0A2540]' : 'text-slate-700'
            }`}
          >
            {t.navHome}
          </button>

          <button
            type="button"
            onClick={() => {
              onNavigate('explore');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentView === 'explore' ? 'bg-blue-50 text-[#0A2540]' : 'text-slate-700'
            }`}
          >
            {t.navExplore}
          </button>

          {hasActiveJourney && (
            <button
              type="button"
              onClick={() => {
                onNavigate('journey');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold bg-amber-50 text-amber-900 flex items-center justify-between"
            >
              <span>{t.navMyJourney}</span>
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              onNavigate('documents');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentView === 'documents' ? 'bg-blue-50 text-[#0A2540]' : 'text-slate-700'
            }`}
          >
            {t.navDocuments}
          </button>

          <button
            type="button"
            onClick={() => {
              onNavigate('track');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentView === 'track' ? 'bg-blue-50 text-[#0A2540]' : 'text-slate-700'
            }`}
          >
            {t.navTrack}
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
            <button
              type="button"
              onClick={() => {
                openLanguageModal();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 flex items-center justify-between"
            >
              <span>Change Language</span>
              <span>{lang === 'en' ? '🇬🇧 English' : lang === 'te' ? '🇮🇳 తెలుగు' : '🇮🇳 हिन्दी'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
