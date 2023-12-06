import React from "react";

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
          <h3>Welcome {this.state.name} and age = {this.state.age}</h3>
        </center>
      </div>
    )
      
  }
}

export default App;