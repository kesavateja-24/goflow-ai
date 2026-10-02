import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { OfficialSource, VerificationStatus } from '../../types';
import { ShieldCheck, ExternalLink, CheckCircle2, Clock, Globe2 } from 'lucide-react';

interface SourceVerificationProps {
  sources: OfficialSource[];
  lastVerified: string;
  verificationStatus: VerificationStatus;
}

export const SourceVerification: React.FC<SourceVerificationProps> = ({
  sources,
  lastVerified,
  verificationStatus
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Authoritative Provenance
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs font-medium text-slate-500">Tier-1 & Tier-2 Citations</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
            {t.sourcesTitle}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {t.sourcesSubtitle}
          </p>
        </div>

        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.verifiedBadge}</span>
          </span>
          <span className="text-xs text-slate-400">
            Verified {lastVerified}
          </span>
        </div>
      </div>

      {/* Sources List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sources.map((src, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-3 hover:border-slate-300 transition"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900">
                  {src.tier === 1 ? 'Tier 1 • Official Portal' : 'Tier 2 • Gazette / Order'}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {src.lastVerified}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900">
                {src.title}
              </h4>

              <div className="flex items-center space-x-1.5 text-xs text-slate-500 mt-1">
                <Globe2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-700 text-[11px]">
                  {src.domain}
                </code>
              </div>

              {src.notes && (
                <p className="text-xs text-slate-600 mt-2 italic">
                  "{src.notes}"
                </p>
              )}
            </div>

            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-[#0A2540] hover:bg-slate-100 text-xs font-bold transition shadow-xs"
            >
              <span>{t.openSourceBtn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
