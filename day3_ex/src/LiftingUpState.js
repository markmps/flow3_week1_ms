import React, { useState } from "react";
 
const Nameformers = (props) => {
    const [name,setName] = useState("");
    function handleChange(event) {
        alert(name);
    }
    function handleSubmit(event) {
      const target = event.target;
      const value = target.value;
        setName(value);
        
    }
    return (
        <div>
          <form onSubmit={handleChange}>
            <p>Tilføj Person</p>
           <input type="text" onChange = {handleSubmit} placeholder="name" />
           <button onClick={handleChange}>Click</button>
           <p>{name}</p>
          </form>
        </div>
      );
}
export default Nameformers;