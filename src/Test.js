import React from "react";

class Test extends React.Component{
    render(){
        return(
            <div>
                <center>
                    <h2>I'm from Test Component</h2>
                    <h2>Name : {this.props.name} Age : {this.props.age}</h2>
                </center>
            </div>
        )
    }
}

export default Test;