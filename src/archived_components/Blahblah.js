import React from "react";

function Blahblah(props) {
  // tuple, [value, set function]
  const [state, setState] = React.useState({
    name: "Mark",
    shouldIGetSomething: false,
  });

  // componentDidMount
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setState({
        name: "dudut",
      });
    }, 5000);

    const timeinterval = setInterval(() => {
      console.log("Hello Aus!");
    }, 5000);

    // cleanup func / teardown func - unsubscribe
    // this is an 'effect' when the component unmounts
    return () => {
      console.log("# thank you for serving..");
      clearTimeout(timeout);
      clearInterval(timeinterval);
    };
  }, []);

  React.useEffect(() => {
    if (state.name === "Aus") {
      console.log("# hello aus! how are you?");
    } else if (state.name === "Mark") {
      console.log("# Hi Mark!");
    } else {
      console.log("# hello sainyo!");
    }
  }, [state.name]);

  React.useEffect(() => {
    let timeout = null;
    if (state.shouldIGetSomething === true) {
      // go and fetch something for the api
      timeout = setTimeout(() => {
        setState({
          name: "dudut",
        });
      }, 5000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [state.shouldIGetSomething]);

  return (
    <div>
      <button onClick={props.handleClick}>Change the name</button>
    </div>
  );
}

export default Blahblah;
