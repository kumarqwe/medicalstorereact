import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';

function PostRegistration() {
  
  const [eMail, setEmailName] = useState('');
  const [password, setpass] = useState('');
  const [repassword, setcpass] = useState('');

  function medicinebook(event)
  {
    event.preventDefault();
    console.warn({eMail,password,repassword});
    let data={eMail,password,repassword};
    fetch('https://localhost:44363/api/LoginRegistration',{
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
      
      <br />
      <label>
        EmailName:
        <input type="text" value={eMail} onChange={(event) => setEmailName(event.target.value)} />
      </label>
      <br />
      <label>
      Password:
        <input type="text" value={password} onChange={(event) => setpass(event.target.value)} />
      </label>
      <br />
      <label>
      Repassword:
        <input type="text" value={repassword} onChange={(event) => setcpass(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostRegistration;