import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, ExternalLink, ShieldCheck, AlertCircle, X, Building2, CheckCircle2 } from 'lucide-react';

interface TrackApplicationModalProps {
  onClose: () => void;
}

export const TrackApplicationModal: React.FC<TrackApplicationModalProps> = ({ onClose }) => {
  const { t } = useLanguage();
  const [appNumber, setAppNumber] = useState('');
  const [portalType, setPortalType] = useState<'meeseva' | 'gsws' | 'jnanabhumi' | 'parivahan'>('meeseva');

  const portalConfig = {
    meeseva: {
      name: 'MeeSeva Citizen Gateway',
      url: 'https://onlineap.meeseva.gov.in/',
      placeholder: 'e.g. AP-REV-123456 or T-2026-987654',
      dept: 'Revenue & G2C Services (Category A & B)'
    },
    gsws: {
      name: 'Grama / Ward Sachivalayam (GSWS)',
      url: 'https://gramawardsachivalayam.ap.gov.in/',
      placeholder: 'e.g. GSWS-2026-XXXXX',
      dept: 'Village & Ward Secretariat Services'
    },
    jnanabhumi: {
      name: 'Jnanabhumi Scholarship Portal',
      url: 'https://jnanabhumi.ap.gov.in/',
      placeholder: 'Enter 12-Digit Student Aadhaar Number',
      dept: 'Social Welfare & Higher Education Dept'
    },
    parivahan: {
      name: 'Sarathi Parivahan (Transport AP)',
      url: 'https://parivahan.gov.in/',
      placeholder: 'e.g. AP0261234562026',
      dept: 'Learners & Driving Licences'
    }
  };

  const currentPortal = portalConfig[portalType];

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appNumber.trim()) {
      alert('Please enter your official application or transaction number.');
      return;
    }
    // Safely redirect citizen to the verified official government portal for true status
    window.open(currentPortal.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071527]/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2 text-[#0A2540] mb-1">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Official Tracking Router
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {t.trackApplicationTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Anti-Hallucination Disclaimer */}
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
          <strong>Official Integrity Guarantee:</strong> GOVFLOW AI never invents simulated application statuses or fake government API responses. We securely route you to the live Government of Andhra Pradesh tracking server.
        </div>

        {/* Portal Selection Tabs */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Government Portal:
          </label>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => setPortalType('meeseva')}
              className={`p-2.5 rounded-xl border font-bold text-left transition ${
                portalType === 'meeseva'
                  ? 'border-[#0A2540] bg-blue-50 text-[#0A2540] ring-1 ring-blue-500/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              MeeSeva Portal
            </button>
            <button
              type="button"
              onClick={() => setPortalType('gsws')}
              className={`p-2.5 rounded-xl border font-bold text-left transition ${
                portalType === 'gsws'
                  ? 'border-[#0A2540] bg-blue-50 text-[#0A2540] ring-1 ring-blue-500/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              GSWS Secretariats
            </button>
            <button
              type="button"
              onClick={() => setPortalType('jnanabhumi')}
              className={`p-2.5 rounded-xl border font-bold text-left transition ${
                portalType === 'jnanabhumi'
                  ? 'border-[#0A2540] bg-blue-50 text-[#0A2540] ring-1 ring-blue-500/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              Jnanabhumi (Scholarships)
            </button>
            <button
              type="button"
              onClick={() => setPortalType('parivahan')}
              className={`p-2.5 rounded-xl border font-bold text-left transition ${
                portalType === 'parivahan'
                  ? 'border-[#0A2540] bg-blue-50 text-[#0A2540] ring-1 ring-blue-500/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              Sarathi Parivahan (RTA)
            </button>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleTrackSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Application / Transaction Number / Identifier:
            </label>
            <input
              type="text"
              value={appNumber}
              onChange={(e) => setAppNumber(e.target.value)}
              placeholder={currentPortal.placeholder}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#0A2540] focus:ring-2 focus:ring-blue-500/20"
            />
            <span className="text-[11px] text-slate-500 mt-1 block">
              {currentPortal.dept}
            </span>
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              Opens: <strong className="text-slate-800">{new URL(currentPortal.url).hostname}</strong>
            </span>

            <button
              type="submit"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-xs sm:text-sm font-bold shadow-md transition"
            >
              <span>{t.trackNowBtn}</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
