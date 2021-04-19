import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from './SingleCategory.scss';


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

export default SingleCategory;