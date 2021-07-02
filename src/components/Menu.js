import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import './Menu.scss';


const Menu = () => {


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
        <a target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1rCn-w39jgq3CB8ZZhfqbbCecZin8FEtl/view?usp=sharing'>CV (format pdf)</a>
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


export default Menu;