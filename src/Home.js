import React from 'react';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
   
    render() {
        return <div className='homePageImg'>
            <h2>Car <br/>Rental</h2>
                    <Link to='/Leas' className='button'> Start</Link>
          
        </div>
    }
}