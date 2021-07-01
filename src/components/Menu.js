import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import './Menu.scss';


const Menu = ({ categories }) => {


  return (
    <>
      <li key='Accueil' className="header__navlink" >
        <NavLink
          activeClassName="active"
          to={`/`}
          exact
        >
          Accueil
          </NavLink>
      </li>
      <li key='cv' className="header__navlink" >
        <NavLink
          activeClassName="active"
          to={`/cv`}
          exact
        >
         CV (format pdf)
          </NavLink>
      </li>
      <li key='switch' className="header__navlink" >
        <NavLink
          activeClassName="active"
          to={`/switch`}
          exact
        >
          Switch App e-commerce
          </NavLink>
      </li>
      <li key='projets' className="header__navlink">
        <NavLink
          activeClassName="active"
          to={`/projets`}
          exact
        >
          Mes autres Projets
          </NavLink>
      </li>
    </>
  )
}

Menu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
}

export default Menu;