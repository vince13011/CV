import React from 'react';
import propTypes from 'prop-types';
import styles from './Contact.scss';
import phone from '../assets/iconPhone.png';
import map from '../assets/iconMap.png';
import mail from '../assets/iconMail.png';
const Contact = () => {

  return (
    
        <div className="contact" >
          <h4 className="contact__title">Coordonnées</h4>
          <ul>
            <li className="contact__list" >
            <img className="contact__list__icon" src={phone} alt="icon phone" />
              <p className="contact__list__content"> 0668011065</p>
            </li>
            <li className="contact__list" >
            <img className="contact__list__icon" src={mail} alt="icon mail" />
              <p className="contact__list__content"> vincent.giglio@hotmail.fr</p>
            </li>
            <li className="contact__list" >
            <img className="contact__list__icon" src={map} alt="icon map" />
              <p className="contact__list__content"> 4b Rue du Château 13010 Marseille</p>
            </li>
          </ul>
        </div>
      
      )
    }

    export default Contact;
     