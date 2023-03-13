import React from 'react'
import { useEffect,useState } from 'react'


function LoginRegistration()
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
            <button onClick={() => setShowLoginRegistration(true)}>showResult</button>
            {loginregistration && (
           <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>RePassword</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.userId}>
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

    

export default LoginRegistration