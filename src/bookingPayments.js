import React, { useState } from 'react';
import { useEffect } from 'react';

function BookingPayments() {
  const [paymentId, setInviteId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [transactionAmount, setInviteName] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [reciept, setReciept] = useState('');
  const [paymentAt, setPaymentat] = useState(new Date());

  function medicinebook(event)
  {
    event.preventDefault();
    console.warn({paymentId,userId,transactionAmount,paymentMethod,reciept,paymentAt});
    let data={paymentId,userId,transactionAmount,paymentMethod,reciept,paymentAt};
    fetch('https://localhost:44363/api/Payments',{
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
        PaymentID:
        <input type="number" value={paymentId} onChange={(event) => setInviteId(parseInt(event.target.value))} />
      </label>
      <br />
      <label>
        UserID:
        <input type="number" value={userId} onChange={(event) => setUserId(parseInt(event.target.value))} />
      </label>
      <br />
      <label>
        TransactionAmount:
        <input type="number" value={transactionAmount} onChange={(event) => setInviteName(parseFloat(event.target.value))} />
      </label>
      <br />
      <label>
      PaymentMethod:
        <input type="text" value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)} />
      </label>
      <br />
      <label>
      Reciept:
        <input type="text" value={reciept} onChange={(event) => setReciept(event.target.value)} />
      </label>
      <br/>
      <label>
      PaymentAt:
        <input type="datetime-local" value={paymentAt.toISOString().slice(0,-1)} onChange={(event) => setPaymentat(new Date(event.target.value))} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingPayments;