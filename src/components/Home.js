import React, { useState} from 'react';
import './Home.scss';
import PropTypes from 'prop-types';
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

    const [index, setIndex] = useState(1);

    return (
        <>
            <Header categories={categories} />
            <nav>
                <ul className="header__nav">
                    <Menu categories={categories} />
                </ul>
            </nav>
            <main className="content">
                <Slider index={index} setIndex={setIndex} />
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