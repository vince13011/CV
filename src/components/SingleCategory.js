import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SingleCategory.scss';
import './SingleExperience.scss';


const SingleCategory = ({ assets, category }) => {
    return (
        <Link className="post" to={`/categories/${category.name}`}>
            

                <h4 className="post__title">{category.name}</h4>
                <ul className="post__container">

                    {assets.map((asset) =>
                        <li key={asset.id} className="post__content">{asset.name}</li>
                    )}
                </ul>
            
        </Link>
    )
}

SingleCategory.propTypes = {
    assets: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }),
};


export default SingleCategory;