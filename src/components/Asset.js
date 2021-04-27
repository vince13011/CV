import React from 'react';
import { Link } from 'react-router-dom';
import './Asset.scss';
import PropTypes from 'prop-types';


const Asset = ({ assets, category }) => {
    return (
        <Link className="asset" to={`/categories/${category.name}`}>


            <h4 className="asset__title">{category.name}</h4>
            <ul className="asset__container">

                {assets.map((asset) =>
                    <li key={asset.id} className="asset__content">{asset.name}</li>
                )}
            </ul>

        </Link>
    )
}

Asset.propTypes = {
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


export default Asset;