import React, { useState } from 'react';
import { useEffect } from 'react';

function BookingEvents() {
  const [eventId, setEventId] = useState('');
  const [eventName, setEventName] = useState('');
  const [discount, setDiscount] = useState(0);

  function medicinebook(event)
  {
    event.preventDefault();
    console.warn({eventId,eventName,discount});
    let data={eventId,eventName,discount};
    fetch('https://localhost:44363/api/EventDetails',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }).then((result)=>{
        //console.warn("result",result);
        result.json().then((resp)=>{
           console.warn("resp",resp)
        })
    })
    
  }

  return (
    <form onSubmit={medicinebook}>
      <label>
        EventId:
        <input type="text" value={eventId} onChange={(event) => setEventId(event.target.value)} />
      </label>
      <br />
      <label>
        EventName:
        <input type="text" value={eventName} onChange={(event) => setEventName(event.target.value)} />
      </label>
      <br />
      <label>
      EventDiscount:
        <input type="number" value={discount} onChange={(event) => setDiscount(parseFloat(event.target.value))} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingEvents;