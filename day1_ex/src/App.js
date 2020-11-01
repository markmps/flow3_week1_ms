import logo from './logo.svg';
import './App.css';
import upper, {text1,text2, text3} from "./file1";
import person, {males,females} from "./file2";
import  MultiWelcome from "./file3";

function App() {
  return (
    <div className="App">
     <h1>Exercise 1</h1>
      <p>{upper("Please uppercase me!")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </div>
  );
}

function App2() {
  return(
  <div>
   <h2>Ex2</h2>
  <p>{person.firstName}</p>
  <p>{person.email}</p>
  <p>{console.log([...person.firstName, ...person.email])}</p>
  <p>{console.log(males.concat(females))}</p>
  <p>{console.log([...males, "Kurt", "Helle", ...females, "Tina"])}</p>
  </div>
  );


}
function PersonV2() {
  const firstName = "firstName: " + person.firstName;
  const lastName = "lastName " + person.lastName;
  const gender = "gender: " + person.gender;
  const email = "email: " + person.email;
  const phone = "phone: " + 123456;
  const friends = "friends: " + [...males, ...females]; 
  return [firstName, lastName, gender, email, phone, friends];
};
//<p>{console.log(PersonV2())}</p>


function App3(){
  return(
    <div>
      <h2>Exercise 3</h2>
      <MultiWelcome/>
    </div>

  );
}
export default App3;
