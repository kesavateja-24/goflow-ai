import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceRecord, DocumentItem } from '../../types';
import { 
  Network, 
  ArrowRight, 
  ExternalLink, 
  Clock, 
  Building, 
  HelpCircle, 
  X, 
  CheckCircle2, 
  ShieldCheck,
  FileText
} from 'lucide-react';

interface DependencyGraphProps {
  service: ServiceRecord;
  heldDocIds: string[];
  onOpenDocModal?: (doc: DocumentItem) => void;
}

export const DependencyGraph: React.FC<DependencyGraphProps> = ({
  service,
  heldDocIds,
  onOpenDocModal
}) => {
  const { lang, t } = useLanguage();
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

  // Group graph stages logically:
  // Level 1: Foundational Identity (Aadhaar, SSC memo, Birth)
  // Level 2: Lineage / Socio-economic prerequisites (Parent Caste, Income, Rice Card, Land)
  // Level 3: Declaration / Prescribed Forms
  // Level 4: Statutory Submission & Field Verification
  // Level 5: Final DSC Digital Certificate

  const level1Docs = service.documents.filter(d => d.dependencies.length === 0 && d.id.includes('aadhaar'));
  const level2Docs = service.documents.filter(d => !level1Docs.includes(d) && !d.id.includes('declaration'));
  const level3Docs = service.documents.filter(d => d.id.includes('declaration') || d.id.includes('form'));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              {t.depGraphTitle}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs font-medium text-slate-500">Interactive DAG Visualization</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
            Prerequisite Order & Relational Hierarchy
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {t.clickNodeHint}
          </p>
        </div>
      </div>

      {/* Interactive Visual Graph Canvas */}
      <div className="mt-6 p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/20 border border-slate-200/80 overflow-x-auto">
        <div className="min-w-[700px] flex items-center justify-between space-x-4">
          {/* Level 1 Column */}
          <div className="flex-1 flex flex-col space-y-3">
            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
              01. Foundation Identity
            </div>
            {service.documents.slice(0, 2).map((doc) => {
              const isHeld = heldDocIds.includes(doc.id);
              const isSelected = selectedDoc?.id === doc.id;
              const name = doc.name[lang] || doc.name.en;

              return (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => setSelectedDoc(doc)}
                  className={`w-full text-left p-3.5 rounded-xl border transition shadow-xs flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#0A2540] bg-blue-50 ring-2 ring-blue-500/20'
                      : isHeld
                      ? 'border-emerald-300 bg-emerald-50/40 hover:border-emerald-400'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Pre-requisite</span>
                    {isHeld && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <span className="text-xs font-bold text-slate-900 line-clamp-2">{name}</span>
                  <span className="text-[10px] text-blue-600 font-semibold mt-2">Click to inspect →</span>
                </button>
              );
            })}
          </div>

          <div className="text-slate-300 px-1">
            <ArrowRight className="w-5 h-5 text-slate-400" />
          </div>

          {/* Level 2 Column */}
          <div className="flex-1 flex flex-col space-y-3">
            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
              02. Supporting Proofs
            </div>
            {service.documents.slice(2, 4).map((doc) => {
              const isHeld = heldDocIds.includes(doc.id);
              const isSelected = selectedDoc?.id === doc.id;
              const name = doc.name[lang] || doc.name.en;

              return (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => setSelectedDoc(doc)}
                  className={`w-full text-left p-3.5 rounded-xl border transition shadow-xs flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#0A2540] bg-blue-50 ring-2 ring-blue-500/20'
                      : isHeld
                      ? 'border-emerald-300 bg-emerald-50/40 hover:border-emerald-400'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Supporting</span>
                    {isHeld && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <span className="text-xs font-bold text-slate-900 line-clamp-2">{name}</span>
                  <span className="text-[10px] text-blue-600 font-semibold mt-2">Click to inspect →</span>
                </button>
              );
            })}
          </div>

          <div className="text-slate-300 px-1">
            <ArrowRight className="w-5 h-5 text-slate-400" />
          </div>

          {/* Level 3 Column */}
          <div className="flex-1 flex flex-col space-y-3">
            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
              03. Official Submission
            </div>
            <div className="p-4 rounded-xl border-2 border-[#0A2540] bg-white shadow-xs">
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                MeeSeva / GSWS Portal
              </span>
              <span className="text-xs font-extrabold text-slate-900 block leading-tight">
                Biometric Submission & VRO Field Enquiry
              </span>
              <span className="text-[10px] text-slate-500 block mt-2">
                All uploaded documents cross-checked against Webland & GSWS databases.
              </span>
            </div>
          </div>

          <div className="text-slate-300 px-1">
            <ArrowRight className="w-5 h-5 text-slate-400" />
          </div>

          {/* Level 4 Column: Final Issued Document */}
          <div className="flex-1 flex flex-col space-y-3">
            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
              04. Final Output
            </div>
            <div className="p-4 rounded-xl border-2 border-emerald-600 bg-emerald-50 shadow-md">
              <div className="flex items-center space-x-1 text-emerald-700 text-[10px] font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Statutory Outcome</span>
              </div>
              <span className="text-xs font-black text-slate-900 block leading-snug">
                {service.outputDocument[lang] || service.outputDocument.en}
              </span>
              <span className="text-[10px] text-emerald-800 font-medium block mt-2">
                QR-Code & Cryptographic DSC signed.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Node Inspector Drawer / Card */}
      {selectedDoc && (
        <div className="mt-4 p-5 rounded-2xl bg-white border-2 border-[#0A2540] shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-[#0A2540]">
                Node Inspector
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                {selectedDoc.name[lang] || selectedDoc.name.en}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setSelectedDoc(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <strong className="text-slate-700 block mb-0.5">Why it is required:</strong>
              <p className="text-slate-600 leading-relaxed">
                {selectedDoc.whyRequired[lang] || selectedDoc.whyRequired.en}
              </p>
            </div>

            <div>
              <strong className="text-slate-700 block mb-0.5">How to obtain it:</strong>
              <p className="text-slate-600 leading-relaxed">
                {selectedDoc.obtainedFrom}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-3 text-slate-500">
              <span className="flex items-center space-x-1">
                <Building className="w-3.5 h-3.5 text-slate-400" />
                <span>{selectedDoc.issuingAuthority}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{selectedDoc.estimatedEffort}</span>
              </span>
            </div>

            <a
              href={selectedDoc.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#0A2540] hover:bg-[#07192C] text-white font-bold transition shadow-xs"
            >
              <span>Visit Verified Portal ({selectedDoc.officialPortal})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
