import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceRecord, CitizenProfile } from '../../types';
import { Globe2, MapPin, ExternalLink, Building2, CheckCircle2, ShieldAlert } from 'lucide-react';
import { AP_DISTRICTS } from '../../data/districts';

interface WhereToApplyProps {
  service: ServiceRecord;
  profile?: CitizenProfile;
}

export const WhereToApply: React.FC<WhereToApplyProps> = ({ service, profile }) => {
  const { lang, t } = useLanguage();
  const districtObj = AP_DISTRICTS.find(d => d.id === profile?.district);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
      <div>
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
          {t.whereToApplyTitle}
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
          Designated Application Channels
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Official statutory submission endpoints in Andhra Pradesh.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Online Option */}
        <div className="p-6 rounded-2xl border-2 border-blue-200/80 bg-gradient-to-b from-blue-50/40 to-white flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center space-x-2 text-blue-700 mb-2">
              <Globe2 className="w-5 h-5" />
              <span className="text-xs font-extrabold uppercase tracking-wider">
                {t.onlineOptionTitle}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              {service.officialPortal}
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Official 24/7 Citizen Portal of Government of Andhra Pradesh. Submit application using your Aadhaar credentials and OTP.
            </p>

            <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
              <div><strong>Department:</strong> {service.department}</div>
              <div><strong>Payment:</strong> Netbanking, UPI, Debit Card (MeeSeva User Charge)</div>
              <div><strong>Digital Output:</strong> Instant PDF download upon Tahsildar approval</div>
            </div>
          </div>

          <a
            href={service.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white text-xs sm:text-sm font-bold shadow-md transition group"
          >
            <span>{t.openOfficialPortal}</span>
            <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Offline Option */}
        <div className="p-6 rounded-2xl border-2 border-amber-200/80 bg-gradient-to-b from-amber-50/30 to-white flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-800 mb-2">
              <MapPin className="w-5 h-5" />
              <span className="text-xs font-extrabold uppercase tracking-wider">
                {t.offlineOptionTitle}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              Grama / Ward Sachivalayam or MeeSeva Center
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Visit your local Secretariat in {districtObj ? (lang === 'te' ? districtObj.nameTe : districtObj.nameEn) : 'Andhra Pradesh'}. Digital Assistant / Welfare Assistant assists with biometric scanning and document upload.
            </p>

            <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
              <div>
                <strong>Venue Type:</strong> {profile?.locationType === 'urban' ? 'Ward Sachivalayam (Municipality)' : 'Grama Sachivalayam (Panchayat)'}
              </div>
              <div>
                <strong>Timings:</strong> 10:00 AM to 5:00 PM (Monday to Saturday)
              </div>
              <div>
                <strong>Fee:</strong> Statutory user charge ₹35 (Printed receipt provided)
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-100/60 border border-amber-300 text-amber-900 text-xs font-medium flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Always insist on the printed MeeSeva receipt with Service Request Number (SRN).</span>
          </div>
        </div>
      </div>
    </div>
  );
};
