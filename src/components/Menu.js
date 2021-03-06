import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import './Menu.scss';



const Menu = ({clickMenu}) => {


  return (
    <>
      <li key='Accueil' className="header__navlink" >
        <NavLink
          activeClassName="active"
          to={`/`}
          exact
          onClick={clickMenu}
        >
          Accueil
          </NavLink>
      </li>
      <li key='cv' className="header__navlink" >
        <a target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1rCn-w39jgq3CB8ZZhfqbbCecZin8FEtl/view?usp=sharing'>CV (format pdf)</a>
      </li>
      <li key='Switch' className="header__navlink" >
        <NavLink
          activeClassName="active"
          to={`/switch`}
          exact
          onClick={clickMenu}
        >
          Projet Switch <br /> (e-commerce)
          </NavLink>
      </li>
    </>
  )
}

Menu.propTypes = {
          clickMenu: PropTypes.func
}

export default Menu;