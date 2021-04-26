import React from 'react';
import { Link } from 'react-router-dom';
import './Asset.scss';


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

export default Asset;