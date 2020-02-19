import React from 'react'
function Least() {

    render() {
        return <form>
            <section><label>From:</label> <br /> <input type='date' />
            </section>
            <section><label>To:</label> <br /> <input type='date' />
            </section>
            <section>
                <label>car type:</label><br />
                <input type='checkbox' name='carType' value={0}/>Little<br />
                <input type='checkbox' name='carType' value={1}/>family<br />
                <input type='checkbox' name='carType' value={2}/>commercial<br />
            </section>
            <section>
                <label>Gere:</label><br />
                <input type='checkbox' name='Gere' value={0}/>Chalk<br />
                <input type='checkbox' name='Gere' value={1}/>Automatic <br />
            </section>

        </form>
    }
}

export default  Least 