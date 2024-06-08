import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import facebook from '../../assets/facebook.svg'
import githubIcon from '../../assets/github.svg'
import skype from '../../assets/skype.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'

import { useTranslation } from '../../TranslationContext';

export function Hero() {

  const { t } = useTranslation();


  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>{t('hello')} <img src={Hello} alt="Hello" width="20px"/> {t('helloiam')}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>{t('fullname')}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>{t('job')}</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">{t('jobdescription')}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">{t('contactme')}</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media">
        <a
          href="https://github.com/AthanasiosBairamis/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
        href="https://www.facebook.com/profile.php?id=61553283370813"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="Facebook" />
      </a>
        <a
          href="https://join.skype.com/invite/Ghglg74ao1Sa"
          target="_blank"
          rel="noreferrer"
        >
          <img src={skype} alt="Skype" />
        </a>
        <a
          href="https://t.me/athanasiosbairamis"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a></div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}