import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test"
  };

  componentDidMount() {
    // happens after the component is rendered
    console.log("componend did mount...");
  }

  //   componentWillMount() {
  //     // happens before the component is rendered.
  //     console.log("component will mount..");
  //   }

  render() {
    return <div />;
  }
}

export default Test;
