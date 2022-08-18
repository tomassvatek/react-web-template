import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import cs from './cs.json';

i18n.use(initReactI18next).init({
  lng: 'cs',
  fallbackLng: 'cs',
  debug: false,
  resources: {
    cs: {
      translation: cs,
    },
  },
});

export default i18n;
