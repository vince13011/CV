import React from 'react';
import'./CategoryPage.scss';
import PropTypes from 'prop-types';
//component
import Header from './Header';
import SingleCategory from './SingleCategory';
import Menu from './Menu';


const CategoryPage = ({ categories, assets, category }) => {
    return (
        <>
            <Header categories={categories} />
            <nav>
                <ul className="header__nav">
                    <Menu key={categories} categories={categories} />
                </ul>
            </nav>
            <main className="content">
            <SingleCategory assets={assets} category={category} />  
            </main>
        </>
    )
}

CategoryPage.propTypes = {

    categories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }),
    ),
    assets: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }),
};

export default CategoryPage;