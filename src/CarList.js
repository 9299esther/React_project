import React from 'react';
import { Link } from 'react-router-dom'
import cars from './assets/cars'


export default function CarList(props) {

    const from = props.car.from
    const to = props.car.to

    function isFree(date, c) {
        let count = c.unAvelebol.length - 1
        if (count === -1)//if empty
            return true
        while (count >= 0) {
            if (date >= c.unAvelebol[count - 1] && date <= c.unAvelebol[count])
                return false
            count -= 2
        }
        return true
    }

    const size0 = props.car.size0 === true ? 0 : -1
    const size1 = props.car.size1 === true ? 1 : -1
    const size2 = props.car.size2 === true ? 2 : -1

    const gearMenual = props.car.gearMenual === true ? 'manual' : -1
    const gearAuto = props.car.gearAuto === true ? 'auto' : -1



    const filterdCars = cars.filter(c => //only sholde run whan clcked
        (c.size === size0 || c.size === size1 || c.size === size2)
        && (c.gear === gearAuto || c.gear === gearMenual)
        && (isFree(from, c) && isFree(to, c)))//if free in date

    function numOfDays(from, to) {//הפרש ימים
        from = from.getTime();
        to = to.getTime();
        let daydiff = parseInt((to - from) / (24 * 3600 * 1000))
        if (daydiff === 0)
            return 1
        else if (daydiff < 0)
            alert('roung date')
        else
            return daydiff
    }

    let numberOfDays = numOfDays(new Date(from), new Date(to))



    return <div className='divCar'>
        {filterdCars.map(car => <div className='CarList' key={car.number}>
            {<div className='carSizeDiv'>
                <img src={car.image} alt='pix' className='carSize' />
            </div >}
            <div className='abutDiv'>
                <h3>{car.name}</h3>
                {car.kms}kms<br />
                {car.year}
            </div>
            <div className='priceDiv'>
                price:{' '+Math.round(car.price * numberOfDays).toLocaleString()}₪<br /><br />
                <Link to='/Payment' className='carButton' type={' '+Math.round(car.price * numberOfDays).toLocaleString()} name={car.number} props={props.car}  onClick={props.setOnHolde}  > Book this vehicle </Link>
            </div>
        </div>)}

    </div>
}