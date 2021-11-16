import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


const Login = () => {
  
    return (
        <div className="login">
            <h1>Login Form</h1>
           <form action="submit">
               <div>
                   <label htmlFor="username">User Name</label>
                   <input type="text" name="username" id="username" required/>
               </div>
               <div>
                   <label htmlFor="password">PassWord</label>
                   <input type="password" name="password" id="password" required/>
               </div>
               
            <Link to="/profile" required>
               <button>Login</button>
           </Link>
           </form>
        </div>
    )
}

export default Login
