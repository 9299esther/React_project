import React from 'react'
function Least(props) {
    const [car, setCar] = React.useState({})

   
        return (<form /* onChange={function(name,value)} */>
            <section><label>From:</label> <br /> <input type='date' />
            </section>
            <section><label>To:</label> <br /> <input type='date' />
            </section>
            <section>
                <label>car type:</label><br />
                <input type='checkbox' name='carType' size={0} onChange={props.chack}/>Little<br />
                <input type='checkbox' name='carType' size={1} onChange={() => setCar({ ...car, size1: true })}/>family<br />
                <input type='checkbox' name='carType' size={2} onChange={() => setCar({ ...car, size2: true })}/>commercial<br />
            </section>
            <section>
                <label>Gere:</label><br />
                <input type='checkbox' name='Gere' gere='Chalk'/>Chalk<br />
                <input type='checkbox' name='Gere' gere='Automatic'/>Automatic <br />
            </section>

        </form>
        )
}

export default  Least 