import React from 'react';
import PropTypes from 'prop-types';
//component
import Header from './Header';
import SingleExperience from './SingleExperience';
import Menu from './Menu';



const ExperiencePage = ({ categories, experiences }) => {
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

ExperiencePage.propTypes = {
    experiences: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            job: PropTypes.string.isRequired,
            society: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ),
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
}

export default ExperiencePage;