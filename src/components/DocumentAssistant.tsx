import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DocumentItem } from '../types';
import { AP_VERIFIED_SERVICES } from '../data/services';
import { FileCheck, Search, Building, Clock, ExternalLink, HelpCircle, ArrowRight } from 'lucide-react';

interface DocumentAssistantProps {
  onSelectServiceWithDoc?: (serviceId: string) => void;
  onOpenDocModal?: (doc: DocumentItem) => void;
}

export const DocumentAssistant: React.FC<DocumentAssistantProps> = ({
  onSelectServiceWithDoc,
  onOpenDocModal
}) => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('');

  // Extract all unique documents across verified services
  const allDocsMap = new Map<string, DocumentItem>();
  AP_VERIFIED_SERVICES.forEach(s => {
    s.documents.forEach(d => {
      if (!allDocsMap.has(d.id)) {
        allDocsMap.set(d.id, d);
      }
    });
  });
  const allDocs = Array.from(allDocsMap.values());

  const filtered = allDocs.filter(d => {
    const name = (d.name[lang] || d.name.en).toLowerCase();
    const purpose = (d.purpose[lang] || d.purpose.en).toLowerCase();
    const auth = d.issuingAuthority.toLowerCase();
    const q = filter.toLowerCase();
    return name.includes(q) || purpose.includes(q) || auth.includes(q);
  });

  return (
    <div className="space-y-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
          Document Intelligence Center
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
          Where to Get Any Government Document in Andhra Pradesh
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Clear issuing authorities, statutory prerequisites, and verified official portal links for every mandatory civic certificate.
        </p>

        {/* Filter input */}
        <div className="mt-6 relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter by document name or issuing authority..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#0A2540] focus:ring-2 focus:ring-blue-500/20 shadow-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {filtered.map((doc) => {
          const name = doc.name[lang] || doc.name.en;
          const purpose = doc.purpose[lang] || doc.purpose.en;
          const why = doc.whyRequired[lang] || doc.whyRequired.en;

          return (
            <div
              key={doc.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900 uppercase">
                    {doc.category}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {doc.estimatedEffort}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {name}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                  {purpose}
                </p>

                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                  <div className="text-slate-500 flex items-center space-x-1">
                    <Building className="w-3 h-3 text-slate-400" />
                    <span><strong>Issuer:</strong> {doc.issuingAuthority}</span>
                  </div>
                  <div className="text-slate-600 pt-1 line-clamp-2 italic">
                    "{why}"
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={doc.officialPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#0A2540] hover:text-blue-700"
                >
                  <span>{doc.officialPortal}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                {onOpenDocModal && (
                  <button
                    type="button"
                    onClick={() => onOpenDocModal(doc)}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800"
                  >
                    View Details →
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
