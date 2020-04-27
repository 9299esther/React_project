
import React, { useState } from 'react';
import cars from './assets/cars'
/* import { Link } from 'react-router-dom'
 */

export default function Payment(props) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    function ifOnHolde() {
        cars.forEach(element => {
            if (element.onHolde === true)//if free in date
                element.isRented = true
                console.log(element.onHolde + element.unAvelebol);
                
        });
    }
    function handleSubmit(e) {
        e.preventDefault()
        alert(`תודה ${name}`)
    }
/* עדכון טלפון באחסון מקומי */
    // toPay
    return <div >
        <h1>Payment</h1>
        <form className='payment' onSubmit={handleSubmit}>
            <h3>Customer information:</h3>
            <section>
                <label>Full name:</label> <br />
                <input type='text' required onChange={e => setName(e.target.value)} />
            </section>
            <section>
                <label>Phone Number:</label> <br />
                <input type='number' required onChange={e => setPhone(e.target.value)} />
            </section>
            <input type='submit' onClick={ifOnHolde} value="OK" />
        </form>
    </div>

} 