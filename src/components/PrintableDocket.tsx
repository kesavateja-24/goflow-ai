import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceRecord, CitizenProfile } from '../types';
import { ShieldCheck, CheckSquare, Square, MapPin } from 'lucide-react';
import { AP_DISTRICTS } from '../data/districts';

interface PrintableDocketProps {
  service: ServiceRecord;
  profile?: CitizenProfile;
  heldDocIds: string[];
}

export const PrintableDocket: React.FC<PrintableDocketProps> = ({
  service,
  profile,
  heldDocIds
}) => {
  const { lang } = useLanguage();
  const title = service.serviceName[lang] || service.serviceName.en;
  const districtObj = AP_DISTRICTS.find(d => d.id === profile?.district);

  return (
    <div className="hidden print:block print-docket bg-white text-black p-8 font-sans">
      {/* Docket Header */}
      <div className="border-b-2 border-black pb-4 mb-6 flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest font-bold text-gray-600 mb-1">
            Government of Andhra Pradesh • Citizen Service Knowledge System
          </div>
          <h1 className="text-2xl font-black uppercase tracking-tight">
            GOVFLOW AI — MY GOVERNMENT JOURNEY
          </h1>
          <div className="text-sm font-semibold mt-1">
            Personal Civic Roadmap & Document Docket
          </div>
        </div>

        <div className="text-right text-xs">
          <div><strong>Date:</strong> {new Date().toLocaleDateString('en-IN')}</div>
          <div><strong>Status:</strong> Officially Verified</div>
          <div><strong>State:</strong> Andhra Pradesh</div>
        </div>
      </div>

      {/* Goal & Profile Info */}
      <div className="mb-6 p-4 border border-gray-300 rounded bg-gray-50 text-sm space-y-1">
        <div><strong>Citizen Goal:</strong> {title}</div>
        <div><strong>Department:</strong> {service.department}</div>
        {profile?.district && (
          <div>
            <strong>Jurisdiction:</strong> {districtObj ? districtObj.nameEn : profile.district} ({profile.locationType === 'urban' ? 'Urban Ward Secretariat' : 'Rural Grama Secretariat'})
          </div>
        )}
        <div><strong>Statutory SLA:</strong> {service.processingTime}</div>
        <div><strong>Statutory Fee:</strong> {service.fees[0] ? service.fees[0].amount : 'Free'}</div>
      </div>

      {/* Section 1: Required Documents Checklist */}
      <div className="mb-6">
        <h2 className="text-base font-bold uppercase border-b border-black pb-1 mb-3">
          1. Required Documents Checklist
        </h2>
        <table className="w-full text-xs border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300 text-left">
              <th className="p-2 border-r border-gray-300 w-12 text-center">Status</th>
              <th className="p-2 border-r border-gray-300">Document Name</th>
              <th className="p-2 border-r border-gray-300">Category</th>
              <th className="p-2 border-r border-gray-300">Issuing Authority</th>
              <th className="p-2">Official Portal</th>
            </tr>
          </thead>
          <tbody>
            {service.documents.map((doc) => {
              const isHeld = heldDocIds.includes(doc.id);
              const docName = doc.name[lang] || doc.name.en;
              return (
                <tr key={doc.id} className="border-b border-gray-200">
                  <td className="p-2 border-r border-gray-300 text-center font-bold">
                    {isHeld ? '[✓] HELD' : '[ ] NEED'}
                  </td>
                  <td className="p-2 border-r border-gray-300 font-semibold">{docName}</td>
                  <td className="p-2 border-r border-gray-300 uppercase">{doc.category}</td>
                  <td className="p-2 border-r border-gray-300">{doc.issuingAuthority}</td>
                  <td className="p-2 font-mono text-[10px]">{doc.officialPortal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Section 2: Step-by-Step Execution Journey */}
      <div className="mb-6">
        <h2 className="text-base font-bold uppercase border-b border-black pb-1 mb-3">
          2. Complete Step-by-Step Action Roadmap
        </h2>
        <div className="space-y-3">
          {service.steps.map((step) => {
            const stepTitle = step.title[lang] || step.title.en;
            const explanation = step.explanation[lang] || step.explanation.en;
            const actionText = step.action[lang] || step.action.en;

            return (
              <div key={step.stepNumber} className="border border-gray-300 p-3 rounded text-xs">
                <div className="flex items-center justify-between font-bold mb-1">
                  <span>
                    STAGE {step.stepNumber < 10 ? `0${step.stepNumber}` : step.stepNumber}: {stepTitle}
                  </span>
                  <span>{step.expectedDays}</span>
                </div>
                <p className="text-gray-700 mb-1">{explanation}</p>
                <div className="text-gray-900 font-semibold">
                  <strong>Action:</strong> {actionText}
                </div>
                {step.offlineVenue && (
                  <div className="text-gray-600 mt-1">
                    <strong>In-Person Venue:</strong> {step.offlineVenue}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 3: Official Portals & Verified Citations */}
      <div className="mb-6">
        <h2 className="text-base font-bold uppercase border-b border-black pb-1 mb-3">
          3. Official Government Sources & Portals
        </h2>
        <ul className="text-xs space-y-1">
          {service.sources.map((src, i) => (
            <li key={i}>
              • <strong>{src.title}</strong>: {src.url} (Domain: {src.domain} • Verified: {src.lastVerified})
            </li>
          ))}
        </ul>
      </div>

      {/* Official Disclaimer Footer */}
      <div className="border-t border-black pt-3 text-[10px] text-gray-500 text-center">
        GOVFLOW AI is an independent citizen-navigation platform for Andhra Pradesh citizens. All statutory submissions, payments, and issuance must be executed through official government portals.
      </div>
    </div>
  );
};
