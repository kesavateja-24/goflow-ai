import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UploadCloud, CheckCircle2, FileText, X, AlertCircle, Sparkles } from 'lucide-react';

interface UploadDocModalProps {
  onClose: () => void;
  onSelectDocumentType: (docKeyword: string) => void;
}

export const UploadDocModal: React.FC<UploadDocModalProps> = ({
  onClose,
  onSelectDocumentType
}) => {
  const { lang } = useLanguage();
  const [selectedType, setSelectedType] = useState('aadhaar');
  const [isSimulating, setIsSimulating] = useState(false);
  const [analyzedSuccess, setAnalyzedSuccess] = useState(false);

  const sampleDocTypes = [
    { id: 'aadhaar', name: 'Aadhaar Card (UIDAI)', kw: 'caste' },
    { id: 'caste', name: 'Existing Old Caste Certificate (MeeSeva)', kw: 'scholarship' },
    { id: 'income', name: 'Previous Year Income Certificate', kw: 'scholarship' },
    { id: 'rice-card', name: 'Andhra Pradesh Rice Card (ePDS)', kw: 'rice card' },
    { id: 'land', name: 'Meebhoomi Pattadar Passbook / 1-B', kw: 'adangal' },
    { id: 'tax', name: 'Property Tax Assessment Receipt', kw: 'electricity' },
  ];

  const handleSimulateScan = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setAnalyzedSuccess(true);
      setTimeout(() => {
        const item = sampleDocTypes.find(d => d.id === selectedType);
        if (item) {
          onSelectDocumentType(item.kw);
        }
        onClose();
      }, 1200);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071527]/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2 text-amber-600 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Document Readiness Assistant
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Select or Scan Existing Document
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

        <p className="text-xs text-slate-600 leading-relaxed">
          Select a document you already hold to automatically identify applicable Andhra Pradesh government services and eliminate redundant prerequisite steps.
        </p>

        {/* Document Type Picker */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Which document do you have?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sampleDocTypes.map(d => (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedType(d.id)}
                className={`p-3 rounded-xl border text-left text-xs font-semibold transition ${
                  selectedType === d.id
                    ? 'border-[#0A2540] bg-blue-50 text-[#0A2540] ring-1 ring-blue-500/20'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span className="line-clamp-1">{d.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dropzone Simulation */}
        <div
          onClick={handleSimulateScan}
          className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-2xl p-6 text-center cursor-pointer bg-slate-50/50 hover:bg-slate-50 transition"
        >
          <UploadCloud className="w-10 h-10 mx-auto text-slate-400 mb-2" />
          <div className="text-xs font-bold text-slate-800">
            {isSimulating ? 'Analyzing document metadata...' : analyzedSuccess ? 'Document Validated!' : 'Click to Upload or Inspect Certificate'}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Local browser verification only • Zero sensitive files stored on server.
          </p>
        </div>

        {isSimulating && (
          <div className="p-3 rounded-xl bg-blue-50 text-blue-900 text-xs font-semibold flex items-center justify-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            <span>Scanning certificate numbers against MeeSeva metadata...</span>
          </div>
        )}

        {analyzedSuccess && (
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-semibold flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Document recognized! Constructing optimized journey...</span>
          </div>
        )}
      </div>
    </div>
  );
};
