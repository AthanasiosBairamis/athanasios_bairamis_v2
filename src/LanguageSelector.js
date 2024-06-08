import React, { useState } from 'react';
import globeIcon from './assets/globe.svg'; 
import { useTranslation } from './TranslationContext'; 

function LanguageSelector() {
  const { locale, setLocale } = useTranslation(); 
  const [showMenu, setShowMenu] = useState(false); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const changeLanguage = (newLocale) => {
    setLocale(newLocale); 
    setShowMenu(false); 
  };

  const [isHovered, setIsHovered] = useState(false); 

  return (
    <div style={{ position: 'relative' }}>
      <img
        id="language-selector"
        src={globeIcon}
        alt="Language"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleMenu}
        style={{ cursor: 'pointer'}}
      />
      {showMenu && (
        <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1 }}>
          {/* Your dropdown menu */}
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{cursor: 'pointer', marginBottom: '5px'}} onClick={() => changeLanguage('en')}>English</li>
            <li style={{cursor: 'pointer', marginBottom: '5px'}} onClick={() => changeLanguage('de')}>Deutsch</li>
            <li style={{cursor: 'pointer', marginBottom: '5px'}} onClick={() => changeLanguage('el')}>Ελληνικά</li>
            {/* Add more languages as needed */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
