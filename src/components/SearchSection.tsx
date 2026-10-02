import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GovflowOrchestrator } from '../api/orchestrator';
import { ServiceRecord } from '../types';
import { Search, ShieldCheck, Clock, Receipt, ArrowRight, Building2, FileCheck } from 'lucide-react';

interface SearchSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ onSelectService }) => {
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const results = GovflowOrchestrator.searchServices(searchTerm);

  return (
    <div className="space-y-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Explore Andhra Pradesh Government Services
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Instant access to all verified citizen services across Revenue, Municipal, Transport, and Welfare administration.
        </p>

        {/* Live Search Input */}
        <div className="mt-6 relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:border-[#0A2540] focus:ring-2 focus:ring-blue-500/20 shadow-xs"
          />
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {results.map((service) => {
          const name = service.serviceName[lang] || service.serviceName.en;
          const desc = service.description[lang] || service.description.en;
          const requiredCount = service.documents.filter(d => d.category === 'required').length;

          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified AP Service</span>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {service.steps.length} Stages
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition leading-snug">
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

              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.processingTime.split(' ')[0]} SLA</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FileCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>{requiredCount} Documents</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-xs font-bold transition shadow-xs group-hover:bg-[#07192C]"
                >
                  <span>Build Journey →</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {results.length === 0 && (
        <div className="text-center py-12 p-8 bg-white rounded-2xl border border-slate-200 max-w-lg mx-auto">
          <p className="text-base font-bold text-slate-800">
            {t.unverifiedErrorTitle}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {t.unverifiedErrorText}
          </p>
          <a
            href="https://onlineap.meeseva.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center px-4 py-2 rounded-xl bg-[#0A2540] text-white text-xs font-bold"
          >
            {t.openOfficialSource}
          </a>
        </div>
      )}
    </div>
  );
};
