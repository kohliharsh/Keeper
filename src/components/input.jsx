import React from "react";

function Input(props)
{
    return<div className = "form">
    <input onChange = {props.onChange} type="text" value = {props.value}/>
    <button onClick = {props.click}>
          <span>Add</span>
        </button>
    </div>
}

export default Input;