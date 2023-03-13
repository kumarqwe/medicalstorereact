import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';

function BookingInvites() {
  const [invitationId, setInviteId] = useState(0);
  const [userEmail, setInviteName] = useState('');
  const [discount, setDiscount] = useState(0);


  function medicinebook(event)
  {
    event.preventDefault();
    console.warn({invitationId,userEmail,discount});
    let data={invitationId,userEmail,discount};
    fetch('https://localhost:44363/api/Invitation',{
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
        InvitationId:
        <input type="number" value={invitationId} onChange={(event) => setInviteId(parseInt(event.target.value))} />
      </label>
      <br />
      <label>
        InvitationName:
        <input type="text" value={userEmail} onChange={(event) => setInviteName(event.target.value)} />
      </label>
      <br />
      <label>
      InviteDiscount:
        <input type="number" value={discount} onChange={(event) => setDiscount(parseFloat(event.target.value))} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingInvites;