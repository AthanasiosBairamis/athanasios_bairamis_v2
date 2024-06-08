import React, { createContext, useContext, useState } from 'react';
import enTranslations from './translations/en.json';
import deTranslations from './translations/de.json';
import elTranslations from './translations/el.json';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [locale, setLocale] = useState('en'); // Default locale

  const translations = {
    en: enTranslations,
    de: deTranslations,
    el: elTranslations
  };

  const t = (key) => translations[locale][key] || key;

  return (
    <TranslationContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
