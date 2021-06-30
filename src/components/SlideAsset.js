import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';


const SlideAsset = ({ assets, category }) => {
    return (
        <Link className="slide__asset" to={`/categories/${category.name}`}>


            <h4 className="slide__asset__title">{category.name}</h4>
            <ul className="slide__asset__container">

                {assets.map((asset) =>
                    <li key={asset.id} className="slide__asset__content">{asset.name}</li>
                )}
            </ul>

        </Link>
    )
}

SlideAsset.propTypes = {
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


export default SlideAsset;