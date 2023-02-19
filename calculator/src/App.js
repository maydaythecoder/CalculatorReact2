import React, { Component } from "react";
import ResultsObj from "./components/Results";
import ButtonDisplay from "./components/ButtonDisplay";

class App extends Component{
  constructor(){
    super();
    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === "="){
      this.calculate()
    } else if(button === "C"){
      this.delete()
    } else if(button === "CE"){
      this.clear()
    }else{
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    try{
      this.setState({
        result: (
          eval(this.state.result) || "" ) + ""
      })
    } catch(e) {
      this.setState({
        result: "error"
      })
    }
  };

  clear = () => {
    this.setState({
      result: ""
    })
  };

  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render(){
    return(
      <div>
        <div className="calcBody">
          <h1>React Calculator</h1>
          <ResultsObj result={this.state.result}/>
          <ButtonDisplay onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}
export default App;
