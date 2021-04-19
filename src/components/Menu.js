
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from './Header.scss';



const Menu = ({ categories }) => {


  return (
    <>
      <li key='Acceuil' className="header__navlink">
        <NavLink
          
          to={`/`}
          exact
        >
          Acceuil
          </NavLink>
      </li>
      <li key='Expériences' className="header__navlink">
        <NavLink
          
          to={`/categories/experiences`}
          exact
        >
          Expériences
          </NavLink>
      </li>
      <li key='Diplomes' className="header__navlink">
        <NavLink
          
          to={`/categories/diplomes`}
          exact
        >
          Diplômes
          </NavLink>
      </li>

      {categories.map(({ name, id }) => (
        <li key={id} className="header__navlink">
          <NavLink
            
            to={`/categories/${name}`}
            exact
          >
            {name}
          </NavLink>
        </li>
      ))}
    </>
  )
}

export default Menu;