import React from 'react';
import propTypes from 'prop-types';
import styles from './Header.scss';
import Menu from './Menu';
import Contact from './Contact';
import ExtLinks from './ExtLinks';
import CVPicture from '../assets/stickerCV.png';

const Header = ({ categories }) => {

  return (
    <header className="header">
      <div className="header__presentation">
        <div className="header__presentation__portrait">
          <img className="header__presentation__portrait__image" src={CVPicture} alt="photo CV" />
          <h2 className="header__presentation__portrait__name">Vincent Giglio <br/>26 ans</h2>
         </div>
         <h1 className="header__presentation__title">Développeur Web <br/>Full Stack </h1>
          <ExtLinks className="extlinks"/>
        <Contact className="contact"/> 
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
