import React from 'react';
import PropTypes from 'prop-types';
import './Slider.scss'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';





const Slider = ({ index, beforeIndex, nextIndex }) => {



    return (
        <div className="arrows">
            <button onClick={beforeIndex} className="slider__button" ><IoIosArrowBack  className="arrows__left" /><p className="arrows__text">Précédent</p></button>
            <div className="category-title_contenaire">
            <h4 className={`category_title ${index === 1 ? "bolder" : null}`}> Compétences</h4>
            <h4 className={`category_title ${index === 2 ? "bolder" : null}`}> Qualités</h4>
            <h4 className={`category_title ${index === 3 ? "bolder" : null}`}> Expériences</h4>
            <h4 className={`category_title ${index === 4 ? "bolder" : null}`}> Diplômes</h4>
            </div>
            <button onClick={nextIndex} className="slider__button" ><IoIosArrowForward className="arrows__right"/><p className="arrows__text">Suivant</p></button>
        </div>


    )
}

Slider.propTypes = {
    index: PropTypes.number.isRequired,
    beforeIndex: PropTypes.func.isRequired,
    nextIndex: PropTypes.func.isRequired, 
};
export default Slider;