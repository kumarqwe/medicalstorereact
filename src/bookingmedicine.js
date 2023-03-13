import React, { useState } from 'react';
import { useEffect } from 'react';

function BookingMedicine() {
  const [medicineId, setMedicineId] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [availabilityMd, setAvailableQty] = useState(0);

  function medicinebook(event)
  {
    event.preventDefault();
    console.warn({medicineId,medicineName,availabilityMd});
    let data={medicineId,medicineName,availabilityMd};
    fetch('https://localhost:44363/api/BookingMedicine',{
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
        MedicineId:
        <input type="text" value={medicineId} onChange={(event) => setMedicineId(event.target.value)} />
      </label>
      <br />
      <label>
        MedicineName:
        <input type="text" value={medicineName} onChange={(event) => setMedicineName(event.target.value)} />
      </label>
      <br />
      <label>
      AvailabilityMd:
        <input type="number" value={availabilityMd} onChange={(event) => setAvailableQty(parseInt(event.target.value))} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingMedicine;