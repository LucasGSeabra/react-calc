import React from 'react';
import './styles.css';

function Button(props) {
    return (
        <button className="calc-btn">
            {props.label}    
        </button>
    )
}

export default Button;