import React from 'react'

export default class CarReturn extends React.Component {

    render() {
        return <>
            <h1>Car Return</h1>
            <form>
                <section><label>Car number:</label> <br /> <input type='number' />
                </section>
                <section>
                    <label>Is the fuel tank full:</label><br />
                    <input type='radio' />Yes<br />
                    <input type='radio' />No<br />
                </section>

                <p>Payment Amount:</p>
                <button>Payment</button>
            </form>
        </>
    }
}