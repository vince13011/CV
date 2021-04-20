import React from 'react';
import propTypes from 'prop-types';
import styles from './Contact.scss';
const Contact = () => {

  return (
    
        <div className="contact" >
          <h4 className="contact__title">Coordonnées</h4>
          <ul>
            <li className="contact__list" >
              <h6 className="contact__list__title">Téléphone : </h6>
              <p className="contact__list__content"> 0668011065</p>
            </li>
            <li className="contact__list" >
              <h6 className="contact__list__title">Mail : </h6>
              <p className="contact__list__content"> vincent.giglio@hotmail.fr</p>
            </li>
            <li className="contact__list" >
              <h6 className="contact__list__title">Adresse : </h6>
              <p className="contact__list__content"> 4b Rue du Château</p>
            </li>
            <li className="contact__list" >
              <h6 className="contact__list__title">Ville : </h6>
              <p className="contact__list__content">13010 Marseille</p>
            </li>
          </ul>
        </div>
      
      )
    }

    export default Contact;
     