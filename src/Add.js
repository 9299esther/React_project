import React from 'react'
import cars from './assets/cars'

export default function Add() {


    return (
        <form >
              {/* "number": 546445,
        "maker": "Toyota",
        "name": "Corolla",
        "image": "https://www.auto1.co.il/carmodelbank/2014-corola1.jpg",
        "year": "2019",
        "price": 300.90, */}

            <section>
                <label>Car size:</label><br />
                <input type='radio' name='size0' />Little<br />
                <input type='radio' name='size1' />Family<br />
                <input type='radio' name='size2' />Commercial<br />
            </section>
            <section>
                <label>Gear:</label><br />
                <input type='radio' name='gearMenual' />Chalk<br />
                <input type='radio' name='gearAuto' />Automatic <br />
            </section>
            <button>Add Car</button>
        </form>
    )
}
