import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h1>404 Not Found</h1>
            <h3>Take me <Link to='/'>Home!</Link></h3>
        </>
    )
}

export default NotFound;