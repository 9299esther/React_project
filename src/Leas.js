import React from 'react';
import Form from './Form'
import CarLoist from './CarLoist'

export default class Leas extends React.Component {

    render() {
        return <>
            <h2>Select a vehicle</h2>
            <Form />
            <CarLoist/>
        </>

    }
}/*                     <Link to={`/`}></Link>
 */