import React from 'react';
import { Link } from 'react-router-dom'
import cars from './assets/cars'


export default function CarLoist(props) {

    return <div className='divCar'>
        {cars.map(car => <div className=' CarLoist' key={car.number}>
            {<div className='carSizeDiv'><img src={car.image} alt='pix' className='carSize'/></div>}
           <h3>{car.name}</h3> <br/>
           price:  {car.price}₪ 
            {car.kms} kms
            {car.yaer}

            <Link to='/Payment' className='button'> Select this vehicle</Link>
        </div>)}

    </div>
}