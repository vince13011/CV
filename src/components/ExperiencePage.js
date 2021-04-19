import React from 'react';
import styles from './ExperiencePage.scss';

//component
import Header from './Header';
import SingleExperience from './SingleExperience';



const ExperiencePage = ({ categories,experiences }) => {
    return (
        <>
            <Header categories={categories} />
            <main>
            <SingleExperience experiences={experiences} />
            </main>
        </>
    )
}

export default ExperiencePage;