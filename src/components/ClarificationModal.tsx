import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IntentAnalysisResult, CitizenProfile } from '../types';
import { AP_DISTRICTS } from '../data/districts';
import { MapPin, Building2, Trees, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ClarificationModalProps {
  intent: IntentAnalysisResult;
  initialDistrict?: string;
  initialLocationType?: 'rural' | 'urban';
  onConfirm: (profile: CitizenProfile) => void;
  onCancel: () => void;
}

export const ClarificationModal: React.FC<ClarificationModalProps> = ({
  intent,
  initialDistrict = 'guntur',
  initialLocationType = 'rural',
  onConfirm,
  onCancel
}) => {
  const { lang, t } = useLanguage();
  const [district, setDistrict] = useState<string>(initialDistrict);
  const [locationType, setLocationType] = useState<'rural' | 'urban'>(initialLocationType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm({
      district,
      locationType,
      preferredLanguage: lang
    });
  };

  const serviceName = intent.matchedService.serviceName[lang] || intent.matchedService.serviceName.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071527]/85 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Top Header */}
        <div className="bg-[#0A2540] text-white p-6 relative">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>AI Service Orchestration Engine</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {t.clarificationTitle}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Target Service: <strong className="text-amber-300 font-semibold">{serviceName}</strong>
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Question 1: District */}
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5 flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>{t.selectDistrict}</span>
            </label>
            <p className="text-xs text-slate-500 mb-2">
              Determines your local Tahsildar Mandal jurisdiction, AP Discom (Electricity), and District Collectorate.
            </p>

            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 font-medium text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 shadow-xs"
            >
              {AP_DISTRICTS.map((d) => (
                <option key={d.id} value={d.id}>
                  {lang === 'te' ? `${d.nameTe} (${d.headquarters})` : `${d.nameEn} (HQ: ${d.headquarters})`}
                </option>
              ))}
            </select>
          </div>

          {/* Question 2: Rural or Urban */}
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5 flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>{t.selectLocationType}</span>
            </label>
            <p className="text-xs text-slate-500 mb-3">
              Andhra Pradesh routes offline submissions through either Village or Ward Secretariats.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setLocationType('rural')}
                className={`flex items-start p-3.5 rounded-xl border-2 text-left transition ${
                  locationType === 'rural'
                    ? 'border-[#0A2540] bg-blue-50/60 ring-2 ring-blue-500/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className={`p-2 rounded-lg mr-3 ${locationType === 'rural' ? 'bg-[#0A2540] text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Trees className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {lang === 'te' ? 'గ్రామీణ ప్రాంతం' : 'Rural Area'}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Grama Sachivalayam / Village Panchayat
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setLocationType('urban')}
                className={`flex items-start p-3.5 rounded-xl border-2 text-left transition ${
                  locationType === 'urban'
                    ? 'border-[#0A2540] bg-blue-50/60 ring-2 ring-blue-500/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className={`p-2 rounded-lg mr-3 ${locationType === 'urban' ? 'bg-[#0A2540] text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {lang === 'te' ? 'పట్టణ ప్రాంతం' : 'Urban Area'}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Ward Sachivalayam / Municipality / Corporation
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition"
            >
              {t.backBtn}
            </button>

            <button
              type="submit"
              className="inline-flex items-center px-6 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-sm font-bold shadow-md transition group"
            >
              <span>{t.proceedToJourney}</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
