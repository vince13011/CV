import React from 'react';
import'./CategoryPage.scss';

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

export default CategoryPage;