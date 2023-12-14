import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let allInfo = [
    {name: "Faizan", age: 23, profession: "Web Developer"},
    {name: "Arif", age: 23, profession: "Web Designer"},
    {name: "Asif", age: 27, profession: "App Developer"},
  ];
  let today = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Now I am, {today-2000}</h1>
        <a
          className="App-link"
          href="https://www.facebook.com/faizanarif247"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faizan Arif
        </a>
        <Count></Count>
        <AllUsers></AllUsers>
        <Users></Users>
        {allInfo.map(info => 
        <Person data={info}></Person>
        )}

      </header>      
    </div>
  );
}

function Person (faizan){
  //for styles
  let personStyle = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px",
    width: "500px"
  }
  //for destructuring
  let {name,age,profession} = faizan.data;
  return(
    <div style={personStyle}>
      <h1>{name}</h1>
      <h2>Age: {age}</h2>
      <p>Profession: {profession}</p>
    </div>
  )
}

//API Implementation
//Method 1:
function AllUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ol>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ol>
    </div>
  )
}

//Method 2:
function Users() {
  const [users, setUsers] = useState([]);
  const handleUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }
  return(
    <div>
      <h1>M@ils: {users.length}</h1>
      <button onClick={handleUsers}>Load Users Mail</button>
      <ol>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ol>
    </div>
  )
}

//useStat
function Count() {
const [count, setCount] = useState(0);
const handleCount = () => setCount(count+1);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => count > 0 ? setCount(count-1) : alert("Negative 🤯!")}>Decrease</button>
      <button onClick={handleCount}>Increase</button>
    </div>
  )
}
export default App;
