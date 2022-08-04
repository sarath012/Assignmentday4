import { createContext, useState } from "react";
import "./App.css";
import ControlledForm from "./Forms/ControlledForm";
import UncontrolledForm from "./Forms/UncontrolledForm";
import Parent from "./Parent/Parent";

export const appContext = createContext({});


function App() {
  
  const [counter,setCounter] = useState(0);

  return (
    <div className="App">
      <ControlledForm /> 
      <br/>
      <br/>
      <br/>

      <UncontrolledForm />
      
      <br/>
      <br/>
      <br/>
      <br/>

      <appContext.Provider value={{counter, setCounter}}>
        <Parent />
      </appContext.Provider>
    </div> 
  );
}

export default App;
