import React from 'react';
import Hoc from './Hoc';

const App = (props) => {
  return (
    <div>
      <center>
        <h1>Welcome {props.name} !! </h1>
      </center>
    </div>
  );
}

export default Hoc(App);