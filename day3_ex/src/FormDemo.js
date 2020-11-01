import { render } from "@testing-library/react";
import React, {useState} from "react";
const NameForm = () => {
  const [name,setName] = useState("");
  function handleChange(event) {
      event.preventDefault();
      alert("The name you typed: " + name)
  }
  function handleSubmit(event) {
    const target = event.target;
    const value = target.value;
      setName(value);
      
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <label>
          Name:
        </label>
        <input type="text" onChange = {handleSubmit}/>
        <button>Click for submit</button>
        <p>{name}</p>
      </form>
    </div>
  );
  
}
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
