import React from 'react';
import PropTypes from 'prop-types';
import './Slider.scss'



const Slider = ({ index, setIndex }) => {
    
    const  clickCategory=(e)=>{
        e.preventDefault();
        console.log('valeur evenement',e.target.value)
        setIndex(Number(e.target.value))
    }
    


    return (
        <div className="category-title_contenaire">
            <button className={`category_title ${index === 1 ? "bolder" : null}`} onClick={clickCategory} value="1" > Compétences</button>
            <button className={`category_title ${index === 2 ? "bolder" : null}`} onClick={clickCategory} value="2"> Qualités</button>
            <button className={`category_title ${index === 3 ? "bolder" : null}`} onClick={clickCategory} value="3"> Expériences</button>
            <button className={`category_title ${index === 4 ? "bolder" : null}`} onClick={clickCategory} value="4"> Diplômes</button>
        </div>
    )
}

Slider.propTypes = {
    index: PropTypes.number.isRequired,
    beforeIndex: PropTypes.func.isRequired,
    nextIndex: PropTypes.func.isRequired, 
};
export default Slider;