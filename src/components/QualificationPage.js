import React from 'react';
import styles from './QualificationPage.scss';

//component
import Header from './Header';
import SingleQualification from './SingleQualification';



const QualificationPage = ({ categories,qualifications }) => {
    return (
        <>
            <Header categories={categories} />
            <main>
            <SingleQualification qualifications={qualifications} />  
            </main>
        </>
    )
}

export default QualificationPage;