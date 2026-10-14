import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PopularGoalsProps {
  onSelectService: (serviceId: string) => void;
  onExploreAll: () => void;
}

interface ServiceCardItem {
  id: string;
  nameEn: string;
  nameTe: string;
  nameHi: string;
  imageUrl: string;
  altText: string;
}

export const PopularGoals: React.FC<PopularGoalsProps> = ({ onSelectService, onExploreAll }) => {
  const { lang } = useLanguage();

  const servicesList: ServiceCardItem[] = [
    {
      id: 'ap-caste-cert',
      nameEn: 'Caste Certificate',
      nameTe: 'కుల ధ్రువీకరణ పత్రం',
      nameHi: 'जाति प्रमाण पत्र',
      imageUrl: '/images/service-caste.jpg',
      altText: 'Indian citizen reviewing official certificate documents'
    },
    {
      id: 'ap-income-cert',
      nameEn: 'Income Certificate',
      nameTe: 'ఆదాయ ధ్రువీకరణ పత్రం',
      nameHi: 'आय प्रमाण पत्र',
      imageUrl: '/images/service-income.jpg',
      altText: 'Person organizing income and financial documents'
    },
    {
      id: 'ap-jnanabhumi-scholarship',
      nameEn: 'Jnanabhumi Post-Matric Scholarship',
      nameTe: 'జ్ఞానభూమి పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్ & విద్యా దీవెన',
      nameHi: 'ज्ञानभूमि पोस्ट-मैट्रिक छात्रवृत्ति',
      imageUrl: '/images/service-scholarship.jpg',
      altText: 'Indian student studying in library with laptop'
    },
    {
      id: 'ap-meebhoomi-adangal',
      nameEn: 'Land / Adangal Services',
      nameTe: 'భూమి / అడంగల్ సేవలు',
      nameHi: 'भूमि / अडंगल सेवाएं',
      imageUrl: '/images/service-land.jpg',
      altText: 'Farmer and landowner reviewing land survey records'
    },
    {
      id: 'ap-birth-cert',
      nameEn: 'Birth Certificate',
      nameTe: 'జనన ధ్రువీకరణ పత్రం',
      nameHi: 'जन्म प्रमाण पत्र',
      imageUrl: '/images/service-birth.jpg',
      altText: 'Indian family with newborn holding civil registration papers'
    },
    {
      id: 'ap-rice-card',
      nameEn: 'Ration Card',
      nameTe: 'బియ్యం కార్డు (రేషన్ కార్డు)',
      nameHi: 'राशन कार्ड',
      imageUrl: '/images/service-ration.jpg',
      altText: 'Indian family at civil supplies ration distribution center'
    },
    {
      id: 'ap-electricity-connection',
      nameEn: 'Electricity Connection',
      nameTe: 'నూతన విద్యుత్ కనెక్షన్',
      nameHi: 'बिजली कनेक्शन',
      imageUrl: '/images/service-electricity.jpg',
      altText: 'Household domestic power meter and electricity connection'
    },
    {
      id: 'ap-driving-licence',
      nameEn: 'Driving Licence',
      nameTe: 'డ్రైవింగ్ లైసెన్స్',
      nameHi: 'ड्राइविंग लाइसेंस',
      imageUrl: '/images/service-driving.jpg',
      altText: 'Young adult learning driving in car'
    },
    {
      id: 'ap-residence-cert',
      nameEn: 'Residence Certificate',
      nameTe: 'నివాస ధ్రువీకరణ పత్రం',
      nameHi: 'निवास प्रमाण पत्र',
      imageUrl: '/images/service-residence.jpg',
      altText: 'Citizen verifying residence and address proof'
    },
    {
      id: 'ap-social-pension',
      nameEn: 'Government Schemes',
      nameTe: 'ప్రభుత్వ పథకాలు',
      nameHi: 'सरकारी योजनाएं',
      imageUrl: '/images/service-welfare.jpg',
      altText: 'Senior citizen receiving government welfare support'
    }
  ];

  return (
    <section className="space-y-6">
      {/* Clean Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-[#0A2540] uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Citizen Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Popular Citizen Goals
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
            Choose your service to view a simplified, step-by-step pathway.
          </p>
        </div>

        <button
          type="button"
          onClick={onExploreAll}
          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-[#0A2540] hover:text-blue-700 transition shadow-2xs shrink-0 self-start sm:self-auto"
        >
          <span>Explore All Services</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid: 5 cards per row on Desktop, 3 on Tablet, 1 or 2 on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {servicesList.map((svc, index) => {
          const name = lang === 'te' ? svc.nameTe : lang === 'hi' ? svc.nameHi : svc.nameEn;

          return (
            <div
              key={`${svc.id}-${index}`}
              onClick={() => onSelectService(svc.id)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 p-3.5 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* REAL PHOTOGRAPH with gentle zoom on hover */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 relative mb-3">
                <img
                  src={svc.imageUrl}
                  alt={svc.altText}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Service Name (Large and Readable) */}
              <div className="px-1 mb-3">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {name}
                </h3>
              </div>

              {/* Build Journey Action Button */}
              <div className="pt-2 px-1 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0A2540] group-hover:text-blue-700 flex items-center space-x-1 transition">
                  <span>Build Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
