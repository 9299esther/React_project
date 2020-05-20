import React, { useState } from 'react'
/*import cars from './assets/cars'
 import { Link } from 'react-router-dom'
 */
export default function CarReturn() {
    const [toPay, setToPay] = useState(0)
    const [carNum, setCarNum] = useState(0)

    /* יש לחייב בגין איחור */
    function numOfDays(from, to) {//הפרש ימים
        from = new Date(from).getTime();
        to = new Date(to).getTime();
        return parseInt((to - from) / (24 * 3600 * 1000))
    }

    function NumInput(num) {
        num = num.target.value
        setCarNum(num)
        if (num / 100000 > 0.9) {//mor then 5 deagets

            var allCars = JSON.parse(localStorage.allCars)
            allCars.forEach(element => {
                if (element.number == num) {/* not ===  */
                    console.log('1:'+toPay);
                    
                    setToPay(Number(element.toPay) + Number(toPay))
                    console.log('2:'+toPay);

                    let a = element.unAvelebol[1] === new Date().toISOString().slice(0, 10) ? "good" : numOfDays(element.unAvelebol[1], new Date().toISOString().slice(0, 10))
                    console.log('3:'+toPay);

                    setToPay(Number(toPay) + a * Number(element.price))
                    console.log('4:'+toPay);


                    //   console.log(element);
                    localStorage.setItem("allCars", JSON.stringify(allCars))//updet localstirigh
                }
            });
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        var allCars = JSON.parse(localStorage.allCars)
        allCars.forEach(element => {
            if (element.number == carNum) {/* not ===  */
                element.onHolde = false
                element.isRented = false
                element.unAvelebol.sort().splice(0, 2)/* מוריד את שתי האיבריםהראשונים */
                localStorage.setItem("allCars", JSON.stringify(allCars))//updet localstirigh
            }
        });
        alert(`You have returnd your car. and paid ${toPay}  ₪`)
    }
    const [isFull, setIsFull] = useState(0)

    function reSetIsFull(e) {/* חיוב לחוסר דלק */
        if (e.target.value === 'yes') {
            if (isFull === 1) {
                setToPay(Number(toPay) - 50)
            }
        }
        if (e.target.value === 'no') {
            setIsFull(1)
            setToPay(Number(toPay) + 50)
        }
        console.log(toPay);
        
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
