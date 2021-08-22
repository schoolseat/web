/* eslint-disable consistent-return */
/* eslint-disable no-constant-condition */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './language.json';

const languages = ['en-US', 'pt-BR'];

export default i18n.use(initReactI18next).init({
  resources,
  lng: languages.includes(navigator.language) ? navigator.language : 'en-US',

  interpolation: {
    escapeValue: false,
  },
});
