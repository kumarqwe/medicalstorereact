import React from 'react'
import { useEffect,useState } from 'react'


function Logins()
{
    const [data,setData] = useState([]);
    const [logins, setShowLogins] = useState(false);
    useEffect(()=>{
        fetch('https://localhost:44363/api/Logins').then(
            Response => Response.json()
        ).then(json => setData(json) )
    },[])
    return (
         <div>
            <button onClick={() => setShowLogins(true)}>showResult</button>
            {logins && (
           <table>
            <thead>
                <tr>
                    <th>Login ID</th>
                    <th>User ID</th>
                    <th>Action</th>
                    <th>Action AT</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.loginId}>
                        <td>{item.loginId}</td>
                        <td>{item.userId}</td>
                        <td>{item.action}</td>
                        <td>{item.actionAt}</td>
                        
                    </tr>
                ))}
            </tbody>
           </table>
            )}
         </div>
    );
}

    

export default Logins