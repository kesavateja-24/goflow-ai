import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, X, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PrivacyModalProps {
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ onClose }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071527]/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2 text-[#0A2540]">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Citizen Privacy Charter & Official Disclaimer
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

        {/* Mandatory Official Disclaimer */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs sm:text-sm font-medium leading-relaxed">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>STATUTORY DISCLAIMER:</strong> {t.officialDisclaimerText}
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h4 className="font-bold text-slate-900 flex items-center space-x-2">
              <EyeOff className="w-4 h-4 text-blue-600" />
              <span>1. Zero Identity Tracking</span>
            </h4>
            <p className="text-xs text-slate-600">
              GOVFLOW AI does not require, store, or log Aadhaar numbers, biometric fingerprints, or bank credentials. All interactions are stateless and stored strictly within your browser's local memory.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h4 className="font-bold text-slate-900 flex items-center space-x-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>2. No Document Upload Storage</span>
            </h4>
            <p className="text-xs text-slate-600">
              When inspecting existing certificates, files are processed exclusively inside your device browser sandbox for readiness matching. No citizen documents are ever saved to external cloud servers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h4 className="font-bold text-slate-900 flex items-center space-x-2">
              <Server className="w-4 h-4 text-purple-600" />
              <span>3. Grounded in Real Tier-1 Government Data</span>
            </h4>
            <p className="text-xs text-slate-600">
              All statutory rules, eligibility clauses, fees, and procedures are sourced directly from official Government of Andhra Pradesh Gazette notifications, MeeSeva Citizen Charters, and department service manuals.
            </p>
          </div>
        </div>

        <div className="pt-2 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-xs sm:text-sm font-bold shadow-xs transition"
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );
};
