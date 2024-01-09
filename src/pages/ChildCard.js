import React from 'react'
import PropTypes from 'prop-types';

export const ChildCard = (props) => {


  return (
    <div className='box'>

        <img src={props.image} className='kidImg' alt=''/>
        <h3>{props.name} - {props.age}</h3>
        <p className='boxText'>"{props.desc}"</p>

        <button className='login3'>
            Adopt now
        </button>
    </div>
  )
}

ChildCard.propTypes = {
  img: PropTypes.string.isRequired,
};
