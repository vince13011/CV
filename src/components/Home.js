import React, { useState} from 'react';
import './Home.scss';
//import PropTypes from 'prop-types';
//component
import Header from './Header';
import ExpContent from './ExpContent';
import QualContent from './QualContent';
import Asset from './Asset';
import Menu from './Menu';
import Slider from './Slider'





import getAssetsByCategory from '../selectors/getAssetsByCategory';


const Home = ({ categories, assets, experiences, qualifications }) => {

    const [index, setindex] = useState(1);


    const nextIndex = (e) => {
        e.preventDefault();

        switch (index) {
            case 1: setindex(index+1); break;
            case 2: setindex(index+1); break;
            case 3: setindex(index+1); break;
            case 4: setindex(1); break;  
            default: setindex(+1); break; 
        }

    }

    const beforeIndex = (e) => {
        e.preventDefault();

        switch (index) {
            case 1: setindex(4); break;
            case 2: setindex(index-1); break;
            case 3: setindex(index-1); break;
            case 4: setindex(index-1); break;
            default: setindex(index-1); break;
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
                <Slider index={index} beforeIndex={beforeIndex} nextIndex={nextIndex}/>
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