import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, TranslationStrings } from '../i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationStrings;
  isFirstVisit: boolean;
  completeFirstVisit: (selectedLang: Language) => void;
  openLanguageModal: () => void;
  isLanguageModalOpen: boolean;
  closeLanguageModal: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('govflow_lang');
    if (saved === 'te' || saved === 'hi' || saved === 'en') {
      return saved;
    }
    return 'en';
  });

  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(() => {
    return !localStorage.getItem('govflow_lang_chosen');
  });

  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('govflow_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('govflow_lang', newLang);
  };

  const completeFirstVisit = (selectedLang: Language) => {
    setLang(selectedLang);
    localStorage.setItem('govflow_lang_chosen', 'true');
    setIsFirstVisit(false);
  };

  const openLanguageModal = () => setIsLanguageModalOpen(true);
  const closeLanguageModal = () => setIsLanguageModalOpen(false);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: TRANSLATIONS[lang],
        isFirstVisit,
        completeFirstVisit,
        openLanguageModal,
        isLanguageModalOpen,
        closeLanguageModal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
