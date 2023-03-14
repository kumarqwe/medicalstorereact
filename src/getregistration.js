import React from 'react'
import { useEffect,useState } from 'react'
import './table.css';

function GetRegistration()
{
    const [data,setData] = useState([]);
    const [loginregistration, setShowLoginRegistration] = useState(false);
    useEffect(()=>{
        fetch('https://localhost:44363/api/LoginRegistration').then(
            Response => Response.json()
        ).then(json => setData(json) )
    },[])
    return (
         <div>
            <button className='Link' onClick={() => setShowLoginRegistration(true)}>showResult</button>
            {loginregistration && (
           <table>
            <thead>
                <tr>
                    <th className="header-cell" >User ID</th>
                    <th className="header-cell">Email</th>
                    <th className="header-cell">Password</th>
                    <th className="header-cell">RePassword</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.userId} className="data-row" >
                        <td>{item.userId}</td>
                        <td>{item.eMail}</td>
                        <td>{item.password}</td>
                        <td>{item.rePassword}</td>
                        
                    </tr>
                ))}
            </tbody>
           </table>
            )}
         </div>
    );
}

    

export default GetRegistration;