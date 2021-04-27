import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ExpContent = ({ experiences }) => {
    return (
       
         
        <Link className="asset" to={`/categories/experiences`}>
            <h4 className="asset__title">Expériences</h4>
            {experiences.map((experience) =>
                <ul  className="asset__container"  key={experience.id}>
                    <li  className="asset__content">{experience.job}</li>
                    <li className="asset__content">{experience.society}</li>
                    <li className="asset__content">{experience.date}</li>
                </ul>
            )}
        </Link>
       
        
    )
}

ExpContent.propTypes = {
    experiences: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          job: PropTypes.string.isRequired,
          society: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ),
}

export default ExpContent;