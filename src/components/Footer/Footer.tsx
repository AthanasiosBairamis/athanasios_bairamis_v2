import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import facebook from '../../assets/facebook.svg'
import githubIcon from '../../assets/github.svg'
import skype from '../../assets/skype.svg'

import telegram from '../../assets/telegram.svg'


import { useTranslation } from '../../TranslationContext';

export function Footer() {

  const { t } = useTranslation();

  return (
    <Container className="footer">
      <a href="https://athanasios.bairamis.gr" className="logo">
        <span>athanasios.</span>
        <span>bairamis.gr</span>
      </a>
      <div>
        <p>
          {t('sitebuiltwith')} <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://github.com/AthanasiosBairamis/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="Github" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61553283370813"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="GitHub" />
        </a>
        <a
          href="https://join.skype.com/invite/Ghglg74ao1Sa"
          target="_blank"
          rel="noreferrer"
        >
          <img src={skype} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/athanasiosbairamis"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        
      </div>
    </Container>
  )
}
