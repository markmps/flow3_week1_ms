import React, {Component} from 'react';
import person,{persons} from "./file2";
 export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  export function WelcomePerson(props){
  return <h1>
  <li>Hello, {props.person.firstName} {props.person.lastName} {props.person.gender} {props.person.email}
  {props.person.phone}</li>
  </h1>
  
  }
  
  export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person ={person[0]}/>
        <WelcomePerson person ={person[1]}/>
        <WelcomePerson person ={person[2]}/>
        
      </div>
    );
  }
  export default MultiWelcome;