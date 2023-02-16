import React from "react";

const SMSService = {
  subscribe: () => {
    setTimeout(() => {
      console.log("You are being subscribed to the service");
    }, [2000]);
  },
  unsubscribe: () => {
    setTimeout(() => {
      console.log("You are now unsubscribed");
    }, [2000]);
  },
  send: () => {
    setTimeout(() => {
      alert("Message has been sent");
    }, [1000]);
  },
};

class SendSMS extends React.Component {
  interval = null;
  componentDidMount() {
    SMSService.subscribe();
    this.interval = setInterval(() => {
      console.log("Hi");
    }, 1000);
  }
  componentWillUnmount() {
    console.log("# clearing interval");
    clearInterval(this.interval);
  }
  render() {
    return <button>Send SMS</button>;
  }
}

export default SendSMS;
