import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

import LanguageSelector from '../../LanguageSelector'
import { useTranslation } from '../../TranslationContext';


export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }




  const { t } = useTranslation();





  
  return (
    <Container className="header-fixed">
      <Router>
        
        <HashLink smooth to="#home" className="logo">
          <span>{"<Athanasios "}</span>
          <span>{" Bairamis />"}</span>
        </HashLink>
        
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
          {t('menu1')}
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
          {t('menu2')}
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
          {t('menu3')}
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
          {t('menu4')}
          </NavHashLink>
          


          
          <LanguageSelector />

        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
