
import React from 'react';
// import CarList from './CarList'
import cars from './assets/cars'


export default function Payment(props) {
    // debugger
    // console.log(props.type);
    console.log(this);
    
    function ifOnHolde(){

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
            <button onClick={ifOnHolde()} >OK</button>
            {/* בלחיצה על אישור מופיעה על המסך הודעה 'תודה' והרכב מסומן כ שכור בתאריך שבחר. */}
        </div>
        <div>Thank you!</div>{/* לשמור מספר רכב */}
    </div>

} 