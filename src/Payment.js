
import React from 'react';
import cars from './assets/cars'


export default function Payment(props) {
  
    function ifOnHolde() {
         cars.forEach(element => {
            if (element.onHolde === true)//if free in date
                element.isRented = true
        });
     //   console.log(cars);
        
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
                <button onClick={ifOnHolde} >OK</button>
                {/* בלחיצה על אישור מופיעה על המסך הודעה 'תודה' והרכב מסומן כ שכור בתאריך שבחר. */}
            </div>
            <div>Thank you!</div>{/* לשמור מספר רכב */}
        </div>

    } 