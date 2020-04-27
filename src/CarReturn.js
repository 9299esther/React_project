import React, { useState } from 'react'
import cars from './assets/cars'
/* import { Link } from 'react-router-dom'
 */
export default function CarReturn() {
    const [toPay, setToPay] = useState(0) 

    function NumInput(num) {
        num = num.target.value

        if (num / 100000 > 0.9) {//mor then 5 deagets

            cars.forEach(element => {
                if (element.number == num) {
                    setToPay(Number(element.toPay)+Number(toPay))
                    element.onHolde = false
                    element.isRented = false
                    element.unAvelebol.splice(0,2)/* מוריד את שתי האיבריםהראשונים */


                   
                    console.log('1: '+ element.unAvelebol  );
                }
            });
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        alert(`You have returnd your car. and paid ${toPay}  ₪`)
    }
    const [isFull, setIsFull] = useState(0)

    function reSetIsFull(e) {/* חיוב לחוסר דלק */
        if (e.target.value === 'yes') {
            if (isFull === 1) {
                setToPay(Number(toPay) - 50)
                console.log('1');
            }
        }
        if (e.target.value === 'no') {
            setIsFull(1)
            setToPay(Number(toPay) + 50)
        }
    }
    return <>
        <h1>Car Return</h1>
        <form onSubmit={handleSubmit}>
            <section><label><b>Car number:</b></label> <br />
                <input type='number' onChange={NumInput} className='width' required />
            </section>
            <section>
                <label><b>Is the Fuel tank full?:</b></label><br />
                <input type='radio' name="ifFull" value='yes' onChange={reSetIsFull} />
                <label htmlFor="yes">Yes</label><br />
                <input type='radio' name="ifFull" value="no" required onChange={reSetIsFull} />
                <label htmlFor="no">No</label>
            </section>
            <div className='padding'>
                <p ><b>Payment Amount:</b> <br /> {toPay + ' ₪'}</p>
                <input type='submit' value="Payment" />
{/* יאשר גם אם מספר רכב לא קיים */}
            </div>
        </form>
    </>
}
