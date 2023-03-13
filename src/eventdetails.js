import React from 'react'
import { useEffect,useState } from 'react'


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
            <button onClick={() => setShowResult(true)}>showResult</button>
            {showResult && (
           <table>
            <thead>
                <tr>
                    <th>Event ID</th>
                    <th>Event Name</th>
                    <th>Discount</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.eventId}>
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