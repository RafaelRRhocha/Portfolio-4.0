'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from '../../public/locales/en/common.json';
import commonPTBR from '../../public/locales/pt-BR/common.json';

const resources = {
  'pt-BR': {
    common: commonPTBR,
  },
  en: {
    common: commonEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',
  fallbackLng: 'pt-BR',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
