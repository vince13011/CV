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
    const [nextcat, setnextcat] = useState(index+1);
    const [beforecat, setbeforecat] = useState(4);

    const nextIndex = (e) => {
        e.preventDefault();

        switch (index) {
            case 1: setindex(index+1);setnextcat(3);setbeforecat(1); break;
            case 2: setindex(index+1);setnextcat(4);setbeforecat(2); break;
            case 3: setindex(index+1);setnextcat(1);setbeforecat(3); break;
            case 4: setindex(1);setnextcat(2);setbeforecat(4) ;break;  
        }

    }

    const beforeIndex = (e) => {
        e.preventDefault();

        switch (index) {
            case 1: setindex(4);setnextcat(1) ;setbeforecat(3); break;
            case 2: setindex(index-1);setnextcat(2) ;setbeforecat(4); break;
            case 3: setindex(index-1);setnextcat(3) ;setbeforecat(1); break;
            case 4: setindex(index-1);setnextcat(4) ;setbeforecat(2); break;
        }
            
    }
    
   
    return (
        <>
            <Header categories={categories} />
            <nav>
                <ul className="header__nav">
                    <Menu categories={categories} />
                </ul>
            </nav>
            <main className="content">
                <div className="arrows">
                    <IoIosArrowBack onClick={beforeIndex}  className="arrows__left" alt="flèche gauche"/>
                    
                    {categories.filter(category => category.id === beforecat).map(category =>
                        <h4 key={category.id} className="category_title__left">{category.name}</h4> 
                    )}
                    {beforecat === 3 && <h4 className="category_title__left"> Expériences</h4>}
                    {beforecat === 4 && <h4 className="category_title__left"> Diplômes</h4>}

                    
                    {index < 3 && categories.filter(category => category.id === index).map(category =>
                        <h2 key={category.id} className="category_title__center">{category.name}</h2>
                        
                    )}
                    {index === 3 && <h2 className="category_title__center"> Expériences</h2>}
                    {index === 4 && <h2 className="category_title__center"> Diplômes</h2>}

                    {categories.filter(category => category.id === nextcat).map(category =>
                        <h4 key={category.id} className="category_title__right">{category.name}</h4> 
                    )}
                    {nextcat === 3 && <h4 className="category_title__right"> Expériences</h4>}
                    {nextcat === 4 && <h4 className="category_title__right"> Diplômes</h4>}

                    <IoIosArrowForward onClick={nextIndex} className="arrows__right" alt="flèche droite" />

                </div>
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