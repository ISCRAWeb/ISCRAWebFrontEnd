import React from 'react';
import Layout from '../components/layout';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <>
      <Layout>
          <h1>ISCRA - студенческий клуб кибербезопасности МГТУ им. Баумана</h1>
          <p>Присоединяйтесь к нам и получайте самые актуальные знания в различных сферах IT и ИБ, принимайте участие в мастер-классах и соревнованиях для студентов!</p>
          <Button>Присоединиться к ISCRA</Button>
      </Layout>
    </>
  );
};

export default HomePage;
