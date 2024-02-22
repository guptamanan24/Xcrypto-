import React from 'react';
import "./NotAuthorized.css";


const ErrorComponent = () => {
 
  return (
    <div className="errorbg">
      <h1 className="errorcode404">Oops!</h1>
      <h2 className="errormsg">404 Page Not Found</h2>
      <p className="errordesc">The page you are looking for might have been removed, </p><p className="errordesc">had its name changed or is temporarily unavailable</p>
  
    </div>
  )
}

 export default ErrorComponent;





