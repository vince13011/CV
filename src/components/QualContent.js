import React from 'react';
import { Link } from 'react-router-dom';

const QualContent = ({ qualifications }) => {
    return (
        <Link className="asset" to={`/categories/diplomes`}>
            <h4 className="asset__title" >Diplômes</h4>
            {qualifications.map((qualification) =>
                <ul className="asset__container" key={qualification.id}>
                    <li className="asset__content">{qualification.name} </li>
                    <li className="asset__content" >{qualification.entity}</li>
                    <li className="asset__content">{qualification.date}</li>
                </ul>
            )}
        </Link>

    )
}

export default QualContent;