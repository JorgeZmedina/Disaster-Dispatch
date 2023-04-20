import React from "react";
import '../styles/Button.css'

function Button(props) {
    return (

        <div class="body">
            <button class="btn btn-hover">
                <span class="btn-text">{props.text}</span>
            </button>
        </div>

    );
}

export default Button;



