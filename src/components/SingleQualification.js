import React from 'react';
import propTypes from 'prop-types';
import styles from './SingleQualification.scss';
import { Link } from 'react-router-dom';

const SingleQualification = ({ qualifications }) => {
    return (
        <Link className="post" to={`/categories/diplomes`}>
            <h4 className="post__title" >Diplômes</h4>
            {qualifications.map((qualification) =>
                <ul className="post__containerwithdate" key={qualification.id}>
                    <li className="post__content">{qualification.name} </li>
                    <li className="post__content" >{qualification.entity}</li>
                    <li className="post__date">{qualification.date}</li>
                </ul>
            )}
        </Link>

    )
}

export default SingleQualification;