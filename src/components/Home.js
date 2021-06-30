import React, { useState, useEffect } from 'react';
import './Home.scss';
import PropTypes from 'prop-types';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
//component
import Header from './Header';
import ExpContent from './ExpContent';
import QualContent from './QualContent';
import Asset from './Asset';
import Menu from './Menu';





import getAssetsByCategory from '../selectors/getAssetsByCategory';


const Home = ({ categories, assets, experiences, qualifications }) => {

    const [index, setindex] = useState(1);

    const nextIndex = (e) => {
        e.preventDefault();
        if (index >= 4) {
            setindex(1);
        }

        else {
            setindex(index + 1);

        }
    }

    const beforeIndex = (e) => {
        e.preventDefault();
        if (index >= 0) {
            setindex(4);
        }

        else {
            setindex(index - 1);

        }
    }


    return (
        <>
            <Header categories={categories} />
            <nav>
                <ul className="header__nav">
                    <Menu key={categories} categories={categories} />
                </ul>
            </nav>
            <main className="content">
                <div className="arrows">
                    <IoIosArrowBack onClick={beforeIndex}  className="arrows__left"/>

                    {index < 3 && categories.filter(category => category.id === index).map(category =>
                        <h2 className="category_title">{category.name}</h2>
                        
                    )}
                    {index === 3 && <h2 className="category_title"> Expériences</h2>}
                    {index === 4 && <h2 className="category_title"> Diplômes</h2>}
                    <IoIosArrowForward onClick={nextIndex} className="arrows__right" />

                </div>
                {categories.filter(category => category.id === index).map(category =>

                    <Asset key={category.id} assets={getAssetsByCategory(assets, category)} category={category} />)

                }

                {index === 3 &&
                    <ExpContent experiences={experiences} styles={{ display: { nextIndex } }} />
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