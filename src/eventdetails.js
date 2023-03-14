import React from 'react'
import { useEffect,useState } from 'react'
import './table.css';

function Event()
{
    const [data,setData] = useState([]);
    const [showResult, setShowResult] = useState(false);
    useEffect(()=>{
        fetch('https://localhost:44363/api/EventDetails').then(
            Response => Response.json()
        ).then(json => setData(json) )
    },[])
    return (
         <div>
            <button className='Link' onClick={() => setShowResult(true)}>showResult</button>
            {showResult && (
           <table>
            <thead>
                <tr>
                    <th className='header-cell'  >Event ID</th>
                    <th className='header-cell' >Event Name</th>
                    <th className='header-cell' >Discount</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.eventId} className='data-row' >
                        <td>{item.eventId}</td>
                        <td>{item.eventName}</td>
                        <td>{item.discount}</td>
                        
                    </tr>
                ))}
            </tbody>
           </table>
            )}
         </div>
    );
}

    

export default Event