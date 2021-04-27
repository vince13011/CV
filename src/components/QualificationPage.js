import React from 'react';
import PropTypes from 'prop-types';
//component
import Header from './Header';
import SingleQualification from './SingleQualification';
import Menu from './Menu';



const QualificationPage = ({ categories, qualifications }) => {
    return (
        <>
            <Header categories={categories} />
            <nav>
                <ul className="header__nav">
                    <Menu key={categories} categories={categories} />
                </ul>
            </nav>
            <main className="content">
                <SingleQualification qualifications={qualifications} />
            </main>
        </>
    )
}

QualificationPage.propTypes = {
    qualifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            entity: PropTypes.string,
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

export default QualificationPage;