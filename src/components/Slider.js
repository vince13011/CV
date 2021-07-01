import React from 'react';
import PropTypes from 'prop-types';
import './Slider.scss'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';





const Slider = ({ index, beforeIndex, nextIndex }) => {



    return (
        <div className="arrows">
            <IoIosArrowBack onClick={beforeIndex} className="arrows__left" alt="flèche gauche" />
            <h4 className={`category_title ${index === 1 ? "bolder" : null}`}> Compétences</h4>
            <h4 className={`category_title ${index === 2 ? "bolder" : null}`}> Qualités</h4>
            <h4 className={`category_title ${index === 3 ? "bolder" : null}`}> Expériences</h4>
            <h4 className={`category_title ${index === 4 ? "bolder" : null}`}> Diplômes</h4>
            <IoIosArrowForward onClick={nextIndex} className="arrows__right" alt="flèche droite" />
        </div>


    )
}
export default Slider;