import React from "react";

import Blahblah from "./Blahblah";

class Greeter extends React.Component {
  state = {
    text: "Hello world from state",
    name: "Mark",
    shouldIGetSomething: false,
  };

  handleClick = () => {
    this.setState({
      text: "Hello universe from click!",
      name: "Dudut",
    });
  };

  componentDidMount() {
    // All side effects will run here after its being mounted
    setTimeout(() => {
      this.setState({
        text: "changed text",
      });
    }, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    // prevState.name === 'Mark'
    // this.state.name === 'Mark'

    // after 5secs
    // prevState.name === 'Mark'
    // this.state.name === 'Raymund'

    // after click
    // prevState.name === 'Raymund'
    // this.state.name === 'Dudut'

    if (prevState.shouldIGetSomething === true) {
      // go and fetch something in the API
    }

    if (prevState.name !== this.state.name) {
      if (this.state.name === "Raymund") {
        console.log("# Changed name to Raymund");
      }
      if (this.state.name === "Dudut") {
        setTimeout(() => {
          console.log("Hellooo how are you dudut?");
        }, 1000);
      }
      if (this.state.name === "Mark") {
        console.log("# Fetch 1000 users in the API");
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.name}
        {/* {this.state.name !== "Raymund" && (
          <Blahblah text={this.state.text} handleClick={this.handleClick} />
        )} */}
        {this.state.name !== "Raymund" && this.props.children}
        {/* {this.state.name !== "Dudut" && <SendSMS />} */}
      </div>
    );
  }
}

export default Greeter;
