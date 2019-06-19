import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../reducers/auth'
import { withRouter } from 'react-router-dom'

const Login = ({dispatch, history}) => {
    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(loginUser({ name: value }))
        setValue('')
        history.push('/products')
    }
     return (
         <div className="container">
             <h1>Login</h1>
             <form onSubmit={handleSubmit}>
                 <div className="form-group">
                    <label>Name:</label>
                    <input required className="form-control" onChange={handleChange} value={value} name="name" />
                 </div>
                 <button className='btn btn-primary' type="submit">Login</button>
             </form>
             <p>Not a user? <Link to="/register">Register</Link></p>
         </div>

     )
}

export default connect(null, null)(withRouter(Login));