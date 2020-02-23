
import React from 'react';

export default class Payment extends React.Component {
   
    render() {
        return <div >
            <h1>Payment</h1>
            <section><label>Full name:</label> <br /> <input type='text' />
            </section>
            <section><label>Phone Number:</label> <br /> <input type='tel' />
            </section>
          <button >Confirmation</button>
          {/* בלחיצה על אישור מופיעה על המסך הודעה 'תודה' והרכב מסומן כ שכור בתאריך שבחר. */}
        </div>
    }
}