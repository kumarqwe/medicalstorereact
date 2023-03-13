import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import './table.css';



function Medicine()
{
    const [data,setData] = useState([]);
    const [showResult, setShowResult] = useState(false);
    useEffect(()=>{
        fetch('https://localhost:44363/api/BookingMedicine').then(
            Response => Response.json()
        ).then(json => setData(json) )
    },[])
    return (
         <div>
            <button className='Link' onClick={() => setShowResult(true)}>showMedicine</button>
            {showResult && (
           <table >
            <thead >
                <tr>
                    <th className="header-cell">Medicine ID</th>
                    <th className="header-cell">Medicine Name</th>
                    <th className="header-cell">Availability</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.medicineId} className="data-row" >
                        <td>{item.medicineId}</td>
                        <td>{item.medicineName}</td>
                        <td>{item.availabilityMd}</td>
                    </tr>
                ))}
            </tbody>
           </table>
            )}
         </div>
    )

    
}

  
export default Medicine;