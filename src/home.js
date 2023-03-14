import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div class="jumbotron">
                        <h1 class="display-4 text-center">Medical Store Management System</h1>
                        <div>
                        <p>Welcome to our Home Page<br/>
        To proceed further we request you<br/>
        to login 
      </p>
      <Link to='/kumar'>
      <button className='Link'>Login </button>
      </Link>
      <br/>
      <Link to='/postregistration'>
      <button className='Link'>Sign Up </button>
      </Link>
      <br/><br/>
      

                        </div>
                        </div>
                </div>
                </div>
            
            </div>
        )
    }
}

export default Home;