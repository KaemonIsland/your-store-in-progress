import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
     return (
         <div>
             <h1>Login!</h1>
             <form>
                 <label>Name:</label>
                 <input name="name" />
             </form>
             <p>Not a user? <Link to="/register">Register</Link></p>
         </div>

     )
}

export default Login;