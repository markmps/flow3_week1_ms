import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from 'react';

  const Example = (props) => {
    const [count, setCount] = useState(0);
    //const [myObj, setObj] = useState({name : 'Peter'});

    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <button value ="count" onClick={() => setCount(count - 1)}>
            Reverse click
          </button>
        </div>
        
      );
  }

  function App() {
      return (
          <div className = "App">
              {/*<Demo demo = "Hello"/>}
              <MyDemo2 names ={names} test ="Dette er testen"/> */}
              <Example name = "Hello"/>
              <Example name = {3}/>
          </div>
      );
  }

  class ClockUsingClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }render() {
      
        return (
            <div className="clock">
                <h1>Hello! This is a class component clock.</h1>
                <button onClick={this.state.date.toLocaleTimeString}>
                {this.state.date.toLocaleTimeString}
                Click me for time
              </button>
            </div>
        )
    }
}

function NumberList(props) {
  const names = props.names;
  const listItems = names.map((name) =>
    <li key>{name.toString()}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


function App2() {
  const names = ["Yas", "Queen", "Slaaay", "issa", "vibe"];
  return(
  <NumberList names={names} />
  );
}

function GetChuckJoke(){

  let urlChuck =  'https://api.chucknorris.io/jokes/random'; 
  let urlDad = 'https://icanhazdadjoke.com/';
 
  const [fetchedJoke, setFetchedJoke] = useState([]);
  const[dadJoke, setDadJoke] = useState([]);
 
 
  const jokeHandler = () => {
      fetch(urlChuck)
      .then(res => res.json())
      .then(data => {
      setFetchedJoke(data);
      });
  };

 
  useEffect(() => {
   const interval = setInterval(() => {
     setDadJoke(
       fetch(urlDad, {
         headers: new Headers({
           accept: "application/json"
         })
       })
         .then(res => res.json())
         .then(data => {
           setDadJoke(data);
         })
     );
   }, 10000);
   return () => clearInterval(interval);
 }, []);
 
 
  return (
    <div>
    <button onClick={jokeHandler}>ChuckJoke</button>
    <p>{fetchedJoke.value}</p>
    <h3>Here Comes the Dad Jokes every 10'th second</h3>
    <p>{dadJoke.joke}</p>

    </div>
  );
 
 }


      



export default Example;
