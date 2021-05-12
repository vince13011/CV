import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SingleCategory.scss';
import './SingleExperience.scss';



const SingleExperience = ({ experiences }) => {
    return (
        <Link className="post" to={`/categories/experiences`}>
            <h4 className="post__title">Expériences</h4>

                {experiences.map((experience) =>
                    <ul className="post__containerwithdate" key={experience.id}>
                        <li className="post__content">{experience.job}</li>
                        <li className="post__content">{experience.society}</li>
                        <li className="post__date__duration">{experience.date}</li>
                    </ul>
                )} 
        </Link>
    )
}

SingleExperience.propTypes = {
    experiences: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          job: PropTypes.string.isRequired,
          society: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ),
}

export default SingleExperience