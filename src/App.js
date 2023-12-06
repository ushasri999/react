import React from "react";
import Test from "./Test";

class App extends React.Component{
  state = {
    name : 'Usha',
    age : 25,
    data : []
  }
  render(){
    return(
      <div>
        <center>
          <Test name = {this.state.name} age = {this.state.age}/>
        </center>
      </div>
    )
      
  }
}

export default App;