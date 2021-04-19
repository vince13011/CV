import React from 'react';
import propTypes from 'prop-types';
import styles from './ExtLinks.scss';
import { ExternalLink } from 'react-external-link';

const ExtLinks = () => {
return(

    <ul className="links">
        <li className="links__list">
        <p>Mes projets sur mon profil GitHub</p>
        <ExternalLink className="links__list__link" href="https://github.com/vince13011"></ExternalLink>
        </li>
        <li className="links__list">
        <p>Plus d'informations sur mon profil LinkedIn</p>
        <ExternalLink className="links__list__link" href="https://www.linkedin.com/in/vincentgiglio/"></ExternalLink>
        </li>
    </ul>
    )
}

export default ExtLinks;