import React from 'react';
import styles from './QualificationPage.scss';

//component
import Header from './Header';
import SingleQualification from './SingleQualification';
import Menu from './Menu';



const QualificationPage = ({ categories,qualifications }) => {
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

export default QualificationPage;