import React, { useState } from 'react';
import './Home.scss';
import PropTypes from 'prop-types';
import { VscLoading } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';

//component
import Header from './Header';
import ExpContent from './ExpContent';
import QualContent from './QualContent';
import Asset from './Asset';
import Menu from './Menu';
import Slider from './Slider'
//selector
import getAssetsByCategory from '../selectors/getAssetsByCategory';


const Home = ({ categories, assets, experiences, qualifications }) => {
    const [showMenu, setShowMenu] = useState(false);
    const clickMenu = () => {
        if (!showMenu) {
            setShowMenu(true)
        }
        else {
            setShowMenu(false)
        }
    }
    const [index, setIndex] = useState(1);

    return (
        <>
            <Header categories={categories} />
            <nav>
            <ul className="header__nav desktop-version">
            <Menu />
            </ul>
                <GiHamburgerMenu className="show-menu" onClick={clickMenu}/>
                {showMenu ?
                    <ul  className={showMenu? " header__nav fixed": "header__nav"}>
                        <Menu showMenu={showMenu}/>
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