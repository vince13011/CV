import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import './Slider.scss'

import SlideAsset from './SlideAsset';
import CVPicture from '../assets/stickerCV.png';

import getAssetsByCategory from '../selectors/getAssetsByCategory';


const Slider = ({ categories, assets, experiences, qualifications }) => {

    const proprietes = {
        duration:5000,
        transitionDuration:500,
        infinite:true,
        indicators:true,
        arrows:true
    }

    return (
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div >
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <span>Slide 3</span>
            </div>
          </div>
                

                {/* {categories.map((category) => {
                    const filteredAssets = getAssetsByCategory(assets, category);
                    return (
                        <div className="each-slide">
                            <div>
                            < SlideAsset key={category.name} assets={filteredAssets} category={category} />
                            </div>
                        </div>
                    );
                })
                }
                <div className="each-slide">
                <div>
                    <Link className="slide__post" to={`/categories/experiences`}>
                        <h4 className="slide__post__title">Expériences</h4>

                        {experiences.map((experience) =>
                            <ul className="slide__post__containerwithdate" key={experience.id}>
                                <li className="slide__post__content">{experience.job}</li>
                                <li className="slide__post__content">{experience.society}</li>
                                <li className="slide__post__date__duration">{experience.date}</li>
                            </ul>
                        )}
                    </Link>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <Link className="slide__post" to={`/categories/diplomes`}>
                        <h4 className="slide__post__title" >Diplômes</h4>
                        {qualifications.map((qualification) =>
                            <ul className="slide__post__containerwithdate" key={qualification.id}>
                                <li className="slide__post__content">{qualification.name} </li>
                                <li className="slide__post__content" >{qualification.entity}</li>
                                <li className="slide__post__date">{qualification.date}</li>
                            </ul>
                        )}
                    </Link>
                    </div>
                </div>
                            */}
            </Slide>
        </div>
    )
}
export default Slider;