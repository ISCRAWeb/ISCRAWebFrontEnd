import { useState } from 'react';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <img src="/logo.svg" alt="Logo" />
      <nav>
        <ul>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Мероприятия</a></li>
          <li><a href="#">Курсы</a></li>
          <li><a href="#">Новости</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;