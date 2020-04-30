import React from 'react';
import Form from './Form'
import CarList from './CarList'
import cars from './assets/cars'


export default function Leas() {
    const [car, setCar] = React.useState( {}/* {
        from: new Date(),
        to: new Date(),
        size0:false,
        size1:false,
        size2:false,
        gearMenual: false,
        gearAuto: false
    } */)

    const chackDate = (value, from) => {
        if (value < new Date().toISOString().slice(0, 10))//if from/to is an pased date
            alert('Wrong date')

        if (value < from)//if to is befor from
            alert('Worng date2')
    }

    const chack = (data) => {
        const { type, name, checked, value } = data.target
        const ifDate = type === 'checkbox' ? checked : value

        setCar({ ...car, [name]: ifDate })//update 'car' date, size or gear

        chackDate(value, car.from)

        
    }

    function setOnHolde(data) {
        const { name, type  } = data.target

        cars.forEach(e => {
     
            if (e.number === Number(name)) {//car number
                e.onHolde = true //put on holde
                e.toPay = Number(type) // rent amunt
                /* date update */
                e.unAvelebol.push(car.from?car.from:new Date(),car.to?car.to:new Date()) /* add to "end" of array */
                console.log(e);//האובייקט של הרכבים
            }
        });

    }
    return <>
        <h1>Select a vehicle:</h1>
        <div className='SelectAvehicle'> {car.value}
            <Form chack={chack} />{/*chackDate={chackDate} onClick */}
            <CarList car={car} setOnHolde={setOnHolde} />{/* filter */}
        </div>
    </>
}
