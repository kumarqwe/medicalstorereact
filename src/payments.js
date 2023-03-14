import React from 'react'
import { useEffect,useState } from 'react'
import './table.css';


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
            <button className='Link' onClick={() => setShowPayments(true)}>showResult</button>
            {payments && (
           <table>
            <thead>
                <tr>
                    <th className='header-cell'>PaymentID</th>
                    <th className='header-cell'>User ID</th>
                    <th className='header-cell'>Transaction Amount</th>
                    <th className='header-cell'>Payment Method</th>
                    <th className='header-cell'>Reciept</th>
                    <th className='header-cell'>PaymentAt</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.paymentId} className='data-row'>
                        <td>{item.paymentId}</td>
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