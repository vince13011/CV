import React from 'react';
import './Asset.scss';
import PropTypes from 'prop-types';


const Asset = ({ assets, category }) => {
    return (
        <div className="asset" to={`/categories/${category.name}`}>
            <ul className="asset__container">

                {assets.map((asset) =>
                    <li key={asset.id} className="asset__content">{asset.name}</li>
                )}
            </ul>
        </div>
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