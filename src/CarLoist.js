import React from 'react';
import { Link } from 'react-router-dom'

export default class CarLoist extends React.Component {
   
    render() {
        return <div  className=' CarLoist'>

  <Link to='/Payment' className='button'> Select this vehicle</Link>          
        

        </div>
    }
}