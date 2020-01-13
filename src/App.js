import React, { Component } from "react";
import axios from "axios";

const API = "https://api.adviceslip.com/advice";

class App extends Component {
  state = {
    reply: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getData();
  }

  getData() {
    axios
      .get(API)
      .then(result => {
        this.setState({ reply: result.data.slip.advice, isLoading: false });
        console.log(this.state.reply);
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    return (
      <div className="main">
        <h1>A wise woman once said:</h1>
        <div>{this.state.error && "Error getting data!"}</div>
        <p>{this.state.reply}</p>
        <br />
        <button onClick={() => this.getData()}>New quote</button>
      </div>
    );
  }
}
export default App;
