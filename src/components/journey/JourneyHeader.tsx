import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceRecord, CitizenProfile } from '../../types';
import { 
  ShieldCheck, 
  Clock, 
  Receipt, 
  Building2, 
  ExternalLink, 
  FileCheck, 
  Printer, 
  Share2,
  MapPin
} from 'lucide-react';
import { AP_DISTRICTS } from '../../data/districts';

interface JourneyHeaderProps {
  service: ServiceRecord;
  profile?: CitizenProfile;
  onPrint: () => void;
  onShare: () => void;
}

export const JourneyHeader: React.FC<JourneyHeaderProps> = ({
  service,
  profile,
  onPrint,
  onShare
}) => {
  const { lang, t } = useLanguage();

  const title = service.serviceName[lang] || service.serviceName.en;
  const description = service.description[lang] || service.description.en;
  const districtObj = AP_DISTRICTS.find(d => d.id === profile?.district);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 relative overflow-hidden">
      {/* Civic Watermark */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-0 pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex flex-wrap items-center gap-2">
          {/* Official Verification Badge */}
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.verifiedBadge}</span>
          </span>

          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
            <Building2 className="w-3 h-3 text-slate-500" />
            <span>{service.department}</span>
          </span>

          {profile?.district && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
              <MapPin className="w-3 h-3 text-amber-600" />
              <span>
                {districtObj ? (lang === 'te' ? districtObj.nameTe : districtObj.nameEn) : profile.district} • {profile.locationType === 'rural' ? 'Rural' : 'Urban'}
              </span>
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={onShare}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{t.shareJourney}</span>
          </button>

          <button
            type="button"
            onClick={onPrint}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0A2540] hover:bg-[#07192C] text-white text-xs font-bold transition shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t.downloadPdf}</span>
          </button>
        </div>
      </div>

      {/* Main Title and Goal */}
      <div className="mt-5">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
          {t.completeJourneyTitle}
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-1">
          {title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          {description}
        </p>
      </div>

      {/* Quick Metrics Bar */}
      <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center space-x-1 text-slate-400 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>Statutory SLA</span>
          </div>
          <div className="mt-1 text-xs sm:text-sm font-bold text-slate-800">
            {service.processingTime}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center space-x-1 text-slate-400 text-xs font-medium">
            <Receipt className="w-3.5 h-3.5 text-amber-600" />
            <span>Official Fee</span>
          </div>
          <div className="mt-1 text-xs sm:text-sm font-bold text-slate-800">
            {service.fees[0] ? service.fees[0].amount : 'Free of Cost'}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center space-x-1 text-slate-400 text-xs font-medium">
            <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Documents Required</span>
          </div>
          <div className="mt-1 text-xs sm:text-sm font-bold text-slate-800">
            {service.documents.filter(d => d.category === 'required').length} Mandatory
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center space-x-1 text-slate-400 text-xs font-medium">
            <ExternalLink className="w-3.5 h-3.5 text-purple-600" />
            <span>Official Portal</span>
          </div>
          <a
            href={service.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-xs sm:text-sm font-bold text-blue-600 hover:underline truncate"
          >
            {service.officialPortal} ↗
          </a>
        </div>
      </div>
    </div>
  );
};
