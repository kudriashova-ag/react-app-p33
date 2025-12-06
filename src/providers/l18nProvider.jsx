import React, { useState } from 'react';
import l18nContext from "../contexts/l18nContext"
import translations from '../translations/translations';

const L18nProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    const changeLang = (lang) => {
        if(translations[lang])
            setLang(lang)
    }

    const contextValue = {
        lang,
        changeLang,
        currentTexts: translations[lang]
    }

    return (
      <l18nContext.Provider value={contextValue}>
        {children}
      </l18nContext.Provider>
    );
}

export default L18nProvider;
