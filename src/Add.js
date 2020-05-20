import React from 'react'
import cars from './assets/cars'

export default function Add() {
//todo

    function handleSubmit(e) {
        e.preventDefault()
        alert(`תודה `)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Car information:</label><br />

            {/*  "number": 546445,
        "maker": "Toyota",
        "name": "Corolla",
        "image": "https://www.auto1.co.il/carmodelbank/2014-corola1.jpg",
        "size": 1,
        "gear": "auto",
        "year": "2019",
        "price": 300.90,
        "kms": "30,000" */}
            <section>
                <label>License plate number:</label><br />
                <input type='number' required />
            </section>
            <section>
                <label>Car maker:</label><br />
                <input type='text' required />
            </section>
            <section>
                <label>Car model:</label><br />
                <input type='text' required />
            </section>
            <section>
                <label>Car size:</label><br />
                <input type='radio' name='size' />Little<br />
                <input type='radio' name='size' />Family<br />
                <input type='radio' name='size' />Commercial<br />
            </section>
            <section>
                <label>Gear:</label><br />
                <input type='radio' name='gear' />Chalk<br />
                <input type='radio' name='gear' />Automatic <br />
            </section>
            <section>
                <label>Production year:</label><br />
                <input type='number' required />
            </section>
            <section>
                <label>Price per day:</label><br />
                <input type='text' required />
            </section>
            <section>
                <label>Mileage:</label><br />
                <input type='number' required />
            </section>
            
            <input type='submit' value="Add Car" />


        </form>
    )
}
