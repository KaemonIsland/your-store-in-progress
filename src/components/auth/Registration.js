import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <div>
            <h1>Register new User</h1>
            <form>
                <label>Name:</label>
                <input />
            </form>
            <p>Already a User? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default Registration;