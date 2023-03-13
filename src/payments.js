import React from 'react'
import { useEffect,useState } from 'react'


function Payment()
{
    const [data,setData] = useState([]);
    const [payments, setShowPayments] = useState(false);
    useEffect(()=>{
        fetch('https://localhost:44363/api/Payments').then(
            Response => Response.json()
        ).then(json => setData(json) )
    },[])
    return (
         <div>
            <button onClick={() => setShowPayments(true)}>showResult</button>
            {payments && (
           <table>
            <thead>
                <tr>
                    <th>PaymentID</th>
                    <th>User ID</th>
                    <th>Transaction Amount</th>
                    <th>Payment Method</th>
                    <th>Reciept</th>
                    <th>PaymentAt</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.paymentId}>
                        <td>{item.userId}</td>
                        <td>{item.transactionAmount}</td>
                        <td>{item.paymentMethod}</td>
                        <td>{item.reciept}</td>
                        <td>{item.paymentAt}</td>
                        
                    </tr>
                ))}
            </tbody>
           </table>
            )}
         </div>
    );
}

    

export default Payment