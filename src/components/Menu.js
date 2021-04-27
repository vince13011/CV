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
      <li key='Expériences' className="header__navlink" >
        <NavLink
          activeClassName="active"
          to={`/categories/experiences`}
          exact
        >
          Expériences
          </NavLink>
      </li>
      <li key='Diplomes' className="header__navlink">
        <NavLink
          activeClassName="active"
          to={`/categories/diplomes`}
          exact
        >
          Diplômes
          </NavLink>
      </li>

      {categories.map(({ name, id }) => (
        <li key={id} className="header__navlink">
          <NavLink
            activeClassName="active"
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

Menu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
}

export default Menu;