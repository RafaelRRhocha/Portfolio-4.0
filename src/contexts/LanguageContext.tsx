'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  locale: string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(i18n.language || 'pt-BR');

  const toggleLanguage = () => {
    const newLocale = locale === 'pt-BR' ? 'en' : 'pt-BR';
    i18n.changeLanguage(newLocale);
    setLocale(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
