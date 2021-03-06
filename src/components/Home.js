import React from 'react';
import './Home.scss';
import PropTypes from 'prop-types';
import { VscLoading } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import'./Contact.scss'

//component
import Header from './Header';
import ExpContent from './ExpContent';
import QualContent from './QualContent';
import Asset from './Asset';
import Menu from './Menu';
import Slider from './Slider'
import Contact from './Contact';
//selector
import getAssetsByCategory from '../selectors/getAssetsByCategory';


const Home = ({ categories, assets, experiences, qualifications,clickMenu,index,setIndex,showMenu }) => {


    return (
        <>
            <Header categories={categories} />
            <nav>
                <ul className="header__nav desktop-version">
                    <Menu />
                </ul>
                <button className="show-menu" onClick={clickMenu}> <GiHamburgerMenu className="burger-menu"/> </button>
                {showMenu ?
                    <ul className={showMenu ? " header__nav fixed" : "header__nav"}>
                        <Menu clickMenu={clickMenu} />
                    </ul>
                    : ""}

            </nav>
            <main className="content">
                {categories.length ? <Slider index={index} setIndex={setIndex} /> : <div className="loading"><VscLoading className="loading__icon" /><p className="loading__text" >Chargement des données</p></div>}

                {categories.filter(category => category.id === index).map(category =>

                    <Asset key={category.id} assets={getAssetsByCategory(assets, category)} category={category} />)

                }

                {index === 3 &&
                    <ExpContent experiences={experiences} />
                }

                {index === 4 &&
                    <QualContent qualifications={qualifications} />
                }
                 
            </main>
            <Contact className="contact"/>
        </>
    )
}

Home.propTypes = {
    assets: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
};



export default Home;