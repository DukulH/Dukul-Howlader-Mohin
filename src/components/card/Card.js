import MapOutlined from '@mui/icons-material/MapOutlined';
import React from 'react';
import './Card.css';

export default function Card() {
  return (
    <div className='Card'>
        <div className='CardLeftSection'>
            <MapOutlined style={{color:'#fd6a01'}}/>
        </div>
        <div className='cardRightSection'>
            <p>Total Sales</p>
            <h5>12.66k</h5>
        </div>
    </div>
  )
}
