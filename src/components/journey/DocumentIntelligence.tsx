import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { DocumentItem } from '../../types';
import { 
  FileCheck, 
  HelpCircle, 
  ExternalLink, 
  Check, 
  Clock, 
  Building, 
  AlertTriangle, 
  Info,
  CheckCircle2,
  Circle
} from 'lucide-react';

interface DocumentIntelligenceProps {
  documents: DocumentItem[];
  heldDocIds: string[];
  onToggleHeldDoc: (docId: string) => void;
  onOpenDocModal?: (doc: DocumentItem) => void;
}

export const DocumentIntelligence: React.FC<DocumentIntelligenceProps> = ({
  documents,
  heldDocIds,
  onToggleHeldDoc,
  onOpenDocModal
}) => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'required' | 'conditional'>('all');
  const [expandedWhy, setExpandedWhy] = useState<string | null>(null);

  const toggleWhy = (docId: string) => {
    setExpandedWhy(prev => (prev === docId ? null : docId));
  };

  const filteredDocs = documents.filter(doc => {
    if (activeTab === 'required') return doc.category === 'required';
    if (activeTab === 'conditional') return doc.category === 'conditional' || doc.category === 'optional';
    return true;
  });

  const mandatoryCount = documents.filter(d => d.category === 'required').length;
  const conditionalCount = documents.filter(d => d.category === 'conditional').length;
  const heldCount = documents.filter(d => heldDocIds.includes(d.id)).length;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            {t.docsSectionTitle}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
            Document Intelligence & Acquisition Sources
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {t.docsSectionSubtitle}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-xl text-xs font-bold self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({documents.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('required')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'required'
                ? 'bg-white text-emerald-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mandatory ({mandatoryCount})
          </button>
          {conditionalCount > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('conditional')}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeTab === 'conditional'
                  ? 'bg-white text-amber-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Conditional ({conditionalCount})
            </button>
          )}
        </div>
      </div>

      {/* "I already have these documents" Banner */}
      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start justify-between gap-4">
        <div className="flex items-start space-x-3">
          <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">
              {t.iAlreadyHaveThese} ({heldCount} / {documents.length} Selected)
            </h4>
            <p className="text-xs text-blue-800 mt-0.5">
              {t.recalculatePrompt}
            </p>
          </div>
        </div>
      </div>

      {/* Documents Grid / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDocs.map((doc) => {
          const isHeld = heldDocIds.includes(doc.id);
          const name = doc.name[lang] || doc.name.en;
          const purpose = doc.purpose[lang] || doc.purpose.en;
          const whyRequired = doc.whyRequired[lang] || doc.whyRequired.en;
          const condition = doc.conditionNote ? (doc.conditionNote[lang] || doc.conditionNote.en) : null;
          const isWhyOpen = expandedWhy === doc.id;

          return (
            <div
              key={doc.id}
              className={`rounded-2xl border transition-all duration-200 p-5 flex flex-col justify-between ${
                isHeld
                  ? 'border-emerald-200 bg-emerald-50/20'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div>
                {/* Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-1.5">
                    {doc.category === 'required' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                        {t.requiredBadge}
                      </span>
                    ) : doc.category === 'conditional' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 text-amber-800 uppercase tracking-wider">
                        {t.conditionalBadge}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-slate-100 text-slate-700 uppercase tracking-wider">
                        {t.optionalBadge}
                      </span>
                    )}
                  </div>

                  {/* Checkbox for "Already have" */}
                  <button
                    type="button"
                    onClick={() => onToggleHeldDoc(doc.id)}
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border transition ${
                      isHeld
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {isHeld ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>I have this</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-slate-400" />
                        <span>Mark as held</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Document Title */}
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {name}
                </h3>

                {/* Purpose */}
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-700">Purpose:</strong> {purpose}
                </p>

                {/* Conditional note if present */}
                {condition && (
                  <div className="mt-2 text-[11px] p-2 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/60 flex items-start space-x-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Condition:</strong> {condition}</span>
                  </div>
                )}

                {/* Why is this required Expander */}
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => toggleWhy(doc.id)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{t.whyRequiredTitle}</span>
                  </button>

                  {isWhyOpen && (
                    <div className="mt-2 p-2.5 rounded-lg bg-slate-50 text-xs text-slate-700 border border-slate-200 animate-in fade-in duration-150">
                      {whyRequired}
                    </div>
                  )}
                </div>
              </div>

              {/* Where to get it footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="flex items-center space-x-1">
                    <Building className="w-3 h-3 text-slate-400" />
                    <span>{doc.issuingAuthority}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{doc.estimatedEffort}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {t.whereToGetIt}
                  </span>
                  <a
                    href={doc.officialPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#0A2540] hover:text-blue-700 hover:underline"
                  >
                    <span>Visit Official Portal ↗</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
