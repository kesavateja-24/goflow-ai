import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceRecord } from '../../types';
import { ArrowRight, CheckCircle2, UserCheck, ShieldCheck, FileCheck2, Bell } from 'lucide-react';

interface WhatHappensNextProps {
  service: ServiceRecord;
}

export const WhatHappensNext: React.FC<WhatHappensNextProps> = ({ service }) => {
  const { lang, t } = useLanguage();

  const workflowSteps = [
    {
      stage: '01',
      title: 'Digital Ingestion & Receipt',
      desc: 'MeeSeva generates unique Service Request Number (SRN) and sends SMS to registered mobile.',
      icon: Bell
    },
    {
      stage: '02',
      title: 'VRO / RI Field Verification',
      desc: 'Village Revenue Officer or Field Inspector examines records and conducts local enquiry.',
      icon: UserCheck
    },
    {
      stage: '03',
      title: 'Statutory Review & DSC Signature',
      desc: 'Tahsildar / Competent Authority reviews case file and signs certificate using cryptographic DSC.',
      icon: ShieldCheck
    },
    {
      stage: '04',
      title: 'QR Watermarked Certificate Issued',
      desc: 'Authentic certificate is available for download on DigiLocker, MeeSeva, or physical delivery.',
      icon: FileCheck2
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
      <div>
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
          Post-Submission Architecture
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
          {t.whatHappensNextTitle}
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Standard administrative workflow governed under the Andhra Pradesh Citizen Service Charter.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {workflowSteps.map((wf, idx) => {
          const Icon = wf.icon;
          return (
            <div
              key={wf.stage}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                    STAGE {wf.stage}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-[#0A2540]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-900">
                  {wf.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {wf.desc}
                </p>
              </div>

              {idx < workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
