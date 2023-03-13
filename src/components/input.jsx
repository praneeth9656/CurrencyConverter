import React from "react";

function InputField(props)
{ 
    return(
        <div><input type="text" value={props.currency} onChange={props.HandleChange}></input><br/></div>
        
    );
    
}

export default InputField;