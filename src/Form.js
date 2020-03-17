import React from 'react'
function Least(props) {

   
        return (<form >
            <section><label>From:</label> <br /> <input name='from' type='date'  onChange={props.chack}/>
            </section>
            <section><label>To:</label> <br /> <input name='to' type='date' onChange={props.chack}/>
            </section>
            <section>
                <label>Car size:</label><br />
                <input /* checked = {true} */ type='checkbox' name='size0'  onChange={props.chack}/>Little<br />
                <input /*checked = {true}*/ type='checkbox' name='size1'  onChange={props.chack}/>Family<br />
                <input /*checked = {true}*/ type='checkbox' name='size2'  onChange={props.chack}/>Commercial<br />
            </section>
            <section>
                <label>Gear:</label><br />
                <input /*checked = {true}*/ type='checkbox' name='gearMenual' onChange={props.chack}/>Chalk<br />
                <input /*checked = {true}*/ type='checkbox' name='gearAuto' onChange={props.chack}/>Automatic <br />
            </section>

        </form>
        )
}

export default  Least 