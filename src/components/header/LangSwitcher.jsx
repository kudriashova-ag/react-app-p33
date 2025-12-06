import React, { useContext } from 'react';
import l18nContext from '../../contexts/l18nContext';

const LangSwitcher = () => {
    const { lang, changeLang } = useContext(l18nContext)

    return (
      <div>
        <span onClick={() => changeLang("en")}>EN</span> |
        <span onClick={() => changeLang("ua")}>UA</span>
      </div>
    );
}

export default LangSwitcher;
