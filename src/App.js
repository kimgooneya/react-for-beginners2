import Button from "./Button";
import styles from "./App.module.css";
import React, { useEffect } from "react";

function Hello(){

  useEffect(()=>{
    console.log("hi :)");
    return () => console.log("byte :(");
  },[]);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = React.useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing? "Hide": "Show"}</button>
    </div>
  );
}

export default App;
