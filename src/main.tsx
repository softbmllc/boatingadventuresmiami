import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { LanguageProvider } from "./LanguageContext";
import translations from "./translations";
import { useLanguage } from "./LanguageContext";

const Root = () => {
  const { language } = useLanguage();
  console.log("Current language:", language);
  console.log("Translations loaded:", translations[language]);
  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Root />
    </LanguageProvider>
  </React.StrictMode>,
);
