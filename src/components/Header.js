import React from 'react';
import propTypes from 'prop-types';
import styles from './Header.scss';
import Menu from './Menu';
import Contact from './Contact';
import ExtLinks from './ExtLinks';
import CVPicture from '../assets/cartoonSticker.jpg';

const Header = ({ categories }) => {

  return (
    <header className="header">
      <div className="header__presentation">
      <img className="header__presentation__image" src={CVPicture} alt="photo CV" />
        <div className="header__presentation__title">
          <h1 className="header__presentation__title__job">Développeur Web <br/>Full Stack </h1>
          <h2 className="header__presentation__title__name">Vincent Giglio <br/>26 ans</h2>
          
          <ExtLinks className="extlinks"/>
        </div>
        <Contact/>
        
      </div>
      <nav>
        <ul className="header__nav">
          <Menu key={categories} categories={categories} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
