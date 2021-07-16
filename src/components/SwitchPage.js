import React from 'react';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import './SwitchPage.scss';
//image
import switchPicture from '../assets/switch.png';
//component
import Header from './Header';
import Menu from './Menu';
import Contact from './Contact';




const SwitchPage = ({ categories, clickMenu, showMenu }) => {


    return (
        <>
            <Header categories={categories} />
            <nav>
                <ul className="header__nav desktop-version">
                    <Menu />
                </ul>
                <button className="show-menu" onClick={clickMenu}> <GiHamburgerMenu className="burger-menu" /> </button>
                {showMenu ?
                    <ul className={showMenu ? " header__nav fixed" : "header__nav"}>
                        <Menu clickMenu={clickMenu} />
                    </ul>
                    : ""}
            </nav>
            <main className="content">
                <div className="article" >
                    <h3 className="article__title">Switch Un template<br/> e-commerce</h3>
                    <div className="article__container">
                    <img className="article__image" src={switchPicture} alt="app switch" />
                        <p className="article__content">Switch est un projet qui est né suite à l'achêvement de ma formation développeur web full stack JS au sein de l'école O'clock.
                            Trois étudiants et moi-même avons imaginé ce template en pleine période de Covid et de confinement où les petits commerces ont eu besoin de se tourner vers des solutions digitales pour survivre.
                        </p>
                        <p className="article__content">
                            Lors de ce projet j'ai participé à la conception Front end et back end. Par la suite j'ai pris le rôle de lead dev back end et mis en place notre API Node.js et la base de données PostgreSQL. J'ai ensuite accompagné partiellement le reste de l'équipe front end pour la fin du projet.
                        </p>
                        <p className="article__content">
                            Pour plus d'information concernant ce projet, vous pouvez retrouver <a className="article__content__link" href="https://drive.google.com/file/d/12wZ0oKsq9sLk8ld7S4VJCNNe1N0l89WJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">le lien du projet</a> sur google drive. Vous pouvez également visiter <a className="article__content__link" href="https://template-switch-ecommerce.netlify.app/" target="_blank" rel="noopener noreferrer">le site démo </a>totalement responsive réalisé avec notre template.(Chargement des articles assez long dans sa V1)<br/>
                            </p>
                            <p className="article__content">
                            Le code de notre application est disponible sur <a className="article__content__link" href="https://github.com/vince13011" target="_blank" rel="noopener noreferrer">Mon compte github</a>, avec un projet pour la partie<a className="article__content__link" href="https://github.com/vince13011/ecommerce-backend" target="_blank" rel="noopener noreferrer"> back-end (API)</a> et un deuxième pour la partie<a className="article__content__link" href="https://github.com/vince13011/switch-front-end" target="_blank" rel="noopener noreferrer"> front-end</a>.
                        </p>

                    </div>
                </div>

            </main>
            <Contact className="contact" />
        </>
    )
}

SwitchPage.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
};



export default SwitchPage;