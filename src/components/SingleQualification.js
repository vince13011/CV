import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCategory.scss';
import './SingleExperience.scss';

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