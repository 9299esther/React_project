import React from 'react';
import Form from './Form'
import CarLoist from './CarLoist'


export default function Leas() {
    const [car, setCar] = React.useState({
        from: new Date(),
        to: new Date(),
        size0: true,
        size1: true,
        size2: true,
        Chalk: true,
        Automatic: true
    })
    const chack=(date)=>{
    /*      if(size0 && size1 && size2&& Chalk && Automatic){
             return 'all'
         }
         if(size0 && size1 && size2&& Chalk ){
             return 'not Automatic'
         } */
         console.log(';;;;')
    }
    

    React.useEffect(() => {
        setCar(car => ({

        }))
    }, [])

    return <>
        <h1>Select a vehicle</h1>
        <div className='SelectAvehicle'> {car.value}
            <Form chack={chack}/>{/* onClick */}
            <CarLoist car={car}/>{/* filter */}
        </div>
    </>

}
