import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './language.json';

export default i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR',

    interpolation: {
      escapeValue: false,
    },
  });
