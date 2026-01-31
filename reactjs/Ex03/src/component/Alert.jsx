
// Component Alert hiển thị tùy theo người dùng nhấn button Success, Warning hoặc nhấn Error( dùng useState):
// success
// warning
// error
import React from 'react';

function Alert({type}){
    return(
        <div>
            {type === "success" && <p>Success!</p>}
            {type === "warning" && <p>Warning!</p>}
            {type === "error" && <p>Error!</p>}
        </div>
        
    )
}

export default Alert;
