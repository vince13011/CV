import React from 'react';
import ExtLinks from './ExtLinks';
import CVPicture from '../assets/stickerCV.png';
import './Header.scss';

const Header = () => {

  return (
    <header className="header">
      <div className="header__presentation">
        <div className="header__presentation__portrait">
          <img className="header__presentation__portrait__image" src={CVPicture} alt="CV" />
          <h2 className="header__presentation__portrait__name">Vincent Giglio <br/>26 ans</h2>
          <ExtLinks className="extlinks"/>
         </div>
         <h1 className="header__presentation__title">Développeur Web <br/>Full Stack </h1> 
        
      </div>
    </header>
  );
};

export default Header;
