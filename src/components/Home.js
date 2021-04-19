import React from 'react';
import './Home.scss';
//component
import Header from './Header';
import ExpContent from './ExpContent';
import QualContent from './QualContent';
import Asset from './Asset';




import getAssetsByCategory from '../selectors/getAssetsByCategory';


const Home = ({ categories, assets, experiences, qualifications }) => {
    return (
        <>
            <Header categories={categories} />
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

export default Home;