'use client';

import { useTranslation } from 'react-i18next';
import { HiLanguage } from 'react-icons/hi2';

import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation('common');

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex items-center justify-center rounded-full bg-white/10 p-2 text-xl text-white transition-all duration-300 hover:bg-accent"
      aria-label="Alternar idioma"
    >
      <HiLanguage />
      <span className="absolute -right-20 top-1/2 hidden -translate-y-1/2 rounded-md bg-white px-2 py-1 text-sm text-primary group-hover:block">
        {t('language.switch')}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
