import React from 'react';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { withMainLayout } from '@/layouts/MainLayout';

const HomePage: React.FC = () => {
  return (
    <>
          <Section className='main-page-section uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-padding uk-text-center'>
          <h1 className='uk-text-bold uk-width-3-4'>ISCRA - студенческий клуб кибербезопасности МГТУ им. Баумана</h1>
          <p className='uk-text-large'>Присоединяйтесь к нам и получайте самые актуальные знания в различных сферах IT и ИБ, принимайте участие в мастер-классах и соревнованиях для студентов!</p>
          <Button className='uk-button uk-button-primary'>Присоединиться к ISCRA</Button>
          </Section>
    </>
  );
};

export default withMainLayout(HomePage);
