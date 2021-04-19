import React from 'react';
import styles from './CategoryPage.scss';

//component
import Header from './Header';
import SingleCategory from './SingleCategory';


const CategoryPage = ({ categories, assets, category }) => {
    return (
        <>
            <Header categories={categories} />
            <main className="single-post">
            <SingleCategory assets={assets} category={category} />  
            </main>
        </>
    )
}

export default CategoryPage;