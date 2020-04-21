
import React from 'react';
import cars from './assets/cars'
import { Link } from 'react-router-dom'


export default function Payment(props) {

    function ifOnHolde() {
        cars.forEach(element => {
            if (element.onHolde === true)//if free in date
                element.isRented = true
           // addClass('viue')
        });
    }
    

    // toPay
    return <div >
        <h1>Payment</h1>
        <div className='payment'>
            <h3>Customer information:</h3>
            <section><label>Full name:</label> <br /> <input type='text' />
            </section>
            <section><label>Phone Number:</label> <br /> <input type='tel' />
            </section>
            <Link to='/thankYou'  > <b><button onClick={ifOnHolde} >OK</button></b> </Link>         
        </div>
    </div>

} 