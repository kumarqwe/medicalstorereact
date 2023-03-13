import React from 'react'
import { useEffect,useState } from 'react'


function Invitation()
{
    const [data,setData] = useState([]);
    const [invitations, setShowInvitation] = useState(false);
    useEffect(()=>{
        fetch('https://localhost:44363/api/Invitation').then(
            Response => Response.json()
        ).then(json => setData(json) )
    },[])
    return (
         <div>
            <button onClick={() => setShowInvitation(true)}>showResult</button>
            {invitations && (
           <table>
            <thead>
                <tr>
                    <th>Invitation ID</th>
                    <th>userEmail</th>
                    <th>Discount</th>
                    <th>Sent At</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.invitationId}>
                        <td>{item.userEmail}</td>
                        <td>{item.discount}</td>
                        <td>{item.sentAt}</td>
                        
                    </tr>
                ))}
            </tbody>
           </table>
            )}
         </div>
    );
}

    

export default Invitation