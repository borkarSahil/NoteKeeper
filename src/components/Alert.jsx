import React from 'react';

function Alert(){
    return(
    <div className="alert alert-danger alert-dismissible fade show alert-cover" role="alert">
    This site is underprogess...
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    )
}

export default Alert;