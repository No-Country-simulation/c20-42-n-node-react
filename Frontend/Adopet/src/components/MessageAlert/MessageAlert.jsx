import React from "react";

const MessageAlert = ({success,message})=>{
    console.log('su',success)
    return(
        <>
            <div className={`alert ${ success ? 'alert-success':' alert-danger'} role="alert`}>
                {message}
            </div>
        </>
    )
}
export default MessageAlert;
