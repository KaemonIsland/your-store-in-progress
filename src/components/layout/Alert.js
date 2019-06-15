import React from 'react'

const Alert = ({type, message, toggleAlert}) => {
    let alert = null;

    if (type && message) {
        alert = (
            <div className={`alert alert-${type} alert-dismissible container fade show`} role="alert">
                <strong>{message}</strong>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={toggleAlert}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }

    return alert;
}

export default Alert;