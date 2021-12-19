import React from 'react'

const Button = ({ type, buttonText, ...props}) => {
    return (
        <div>
            <button type={type} {...props}>{buttonText}</button>
        </div>
    )
}

export default Button
