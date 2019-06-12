import React from 'react'

const Alert = ({type, message}) => {
    let alert = null;

    if (type && message) {
        alert = (
            <div className="container">
                <div class={`alert alert-${type}`} role="alert">
                    {message}
                </div>
            </div>
        )
    }

    return alert;
}

export default Alert;