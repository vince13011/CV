import React from 'react';
import './Home.scss';
import PropTypes from 'prop-types';
//component
import Header from './Header';
import ExpContent from './ExpContent';
import QualContent from './QualContent';
import Asset from './Asset';
import Menu from './Menu';




import getAssetsByCategory from '../selectors/getAssetsByCategory';


const Home = ({ categories, assets, experiences, qualifications }) => {
    return (
        <>
            <Header categories={categories} />
            <nav>
                <ul className="header__nav">
                    <Menu key={categories} categories={categories} />
                </ul>
            </nav>
            <main className="content">
                {categories.map((category) => {
                    const filteredAssets = getAssetsByCategory(assets, category);
                    return (<Asset key={category.name} assets={filteredAssets} category={category} />);
                })
                }
                <ExpContent experiences={experiences} />
                <QualContent qualifications={qualifications} />
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