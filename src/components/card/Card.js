import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
        <div className='CardLeftSection' style={{backgroundColor:props.card_item.background_color_code}}>
            {props.card_item.icon}
        </div>
        <div className='cardRightSection'>
            <p>{props?.card_item.name}</p>
            <h5 style={{color:props.card_item.text_color_code}}>{props?.card_item.total}</h5>
        </div>
    </div>
  )
}
