import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LifecycleComponent from "./component/LifecycleComponent";
import { UseRefHook } from "./component/hooks/UseRefHook";
import { LifecycleHooksComponent } from "./component/LifecycleHooksComponent";
import { ParentComponent } from "./component/useCallbackDemo/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      {/* <FullPage/> */}
      {/* <LifecycleHooksComponent/> */}
      {/* <LifecycleComponent/> */}
      {/* <UseRefHook></UseRefHook> */}
      {/* <div className="relative">{"Relative - rem"}</div>
      <div className="relative2">{"Relative - em"}</div>
      <div className="absolute">{"Absolute - pixel"}</div> */}
    </div>
  );
}

export default App;
