import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../../reducers/auth'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Registration = ({dispatch, history}) => {
    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(registerUser({ name: value }))
        setValue('')
        history.push('/products')
    }

    return (
        <div className="container">
            <h1>Become a user</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input required className="form-control" value={value} onChange={handleChange} />
                </div>
                <button className="btn btn-primary" type='submit'>Register</button>
            </form>
            <p>Already a User? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default connect(
    null,
    null,
)(withRouter(Registration));