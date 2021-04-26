import React from 'react';


//component
import Header from './Header';
import SingleExperience from './SingleExperience';
import Menu from './Menu';



const ExperiencePage = ({ categories,experiences }) => {
    return (
        <>
            <Header categories={categories} />
            <nav>
                <ul className="header__nav">
                    <Menu key={categories} categories={categories} />
                </ul>
            </nav>
            <main className="content">
            <SingleExperience experiences={experiences} />
            </main>
        </>
    )
}

export default ExperiencePage;