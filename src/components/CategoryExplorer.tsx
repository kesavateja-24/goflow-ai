import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICE_CATEGORIES } from '../data/categories';
import { 
  FileText, 
  GraduationCap, 
  HeartHandshake, 
  Scroll, 
  Car, 
  Zap, 
  ShoppingBag, 
  Building2, 
  Home, 
  Sprout, 
  Stethoscope, 
  Briefcase,
  ArrowRight
} from 'lucide-react';

interface CategoryExplorerProps {
  onSelectCategory: (categoryId: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const CategoryExplorer: React.FC<CategoryExplorerProps> = ({
  onSelectCategory,
  onSelectService
}) => {
  const { lang, t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    FileText,
    GraduationCap,
    HeartHandshake,
    Scroll,
    Car,
    Zap,
    ShoppingBag,
    Building2,
    Home,
    Sprout,
    Stethoscope,
    Briefcase
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            Public Service Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-0.5">
            {t.categoriesTitle}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {t.categoriesSubtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SERVICE_CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.iconName] || FileText;
          const name = cat.name[lang] || cat.name.en;
          const desc = cat.description[lang] || cat.description.en;

          return (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0A2540] flex items-center justify-center border border-blue-100 group-hover:bg-[#0A2540] group-hover:text-white transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                    {cat.count} Services
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-900 transition">
                  {name}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                {cat.featuredServices.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => onSelectService(cat.featuredServices[0])}
                    className="text-xs font-bold text-[#0A2540] hover:text-amber-700 flex items-center space-x-1"
                  >
                    <span>View Flagship Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-xs text-slate-400">Available at MeeSeva</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
