import React from 'react';

const ErrorsAlert = (props) => (
  <div className="alert alert-warning" role="alert">
    <ul className="list-unstyled">
        <li>{props.error}</li>
    </ul>
  </div>
);

export default ErrorsAlert;
