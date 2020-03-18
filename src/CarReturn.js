import React from 'react'
import cars from './assets/cars'

export default function CarReturn() {
    let toPay = '0'
    function NumInput(num) {
        console.log(num);

        cars.forEach(element => {
            if (element.number === num) {//if free in date
                toPay = element.toPay
                element.onHolde = false
                element.isRented = false
            }
        });
    }
    return <>
        <h1>Car Return</h1>
        <form>
            <section><label>Car number:</label> <br /> <input type='number' onChange={NumInput} className='width' />
            </section>
            <section>
                <label>Is the fuel tank full:</label><br />
                <input type='radio' />Yes<br />
                <input type='radio' />No<br />
            </section>
            <div className='padding'>
                <p >Payment Amount:{toPay + ' ₪'}</p>
                <button>Payment</button>
            </div>
        </form>
    </>
}
