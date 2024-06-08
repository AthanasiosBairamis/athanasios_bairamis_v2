import { Container } from "./styles";


import { Form } from "../Form/Form";

import { useTranslation } from '../../TranslationContext';

export function Contact(){

  const { t } = useTranslation();

  return(
    <Container id="contact">
      <header>
        <h2>{t('formcontact')}</h2>
        <p>{t('formcontactdetails1')}</p>
        <p>{t('formcontactdetails2')} </p>
      </header>
      <Form></Form>
    </Container>
  )
}