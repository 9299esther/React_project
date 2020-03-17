import React from 'react';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {

    render() {
        return <> <div className='homePageImg'>
            <h2>Car <br />Rental</h2>
            <Link to='/Leas' className='button'> Rent a car</Link>
            <br/>
            <br/>
            <Link to='/CarReturn' className='button'> Return Car </Link>

        </div>
        <p> <b>Did you know:</b> <br/>
        The earliest example of cars offered for rent is 1906. The German company Sixt was founded in 1912 under the name Sixt Autofahrten und Selbstfahrer (Sixt Cruising Vehicles and Self Drivers). </p>
    </>
    }
}