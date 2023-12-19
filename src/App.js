import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
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
        <UsersList></UsersList>
      </header>      
    </div>
  );
}

function UsersList(){
  let allInfo = [
    {name: "Faizan", age: 23, profession: "Web Developer", id: '1a2'},
    {name: "Arif", age: 23, profession: "Web Designer", id: '1a3'},
    {name: "Asif", age: 27, profession: "App Developer", id: '1a4'},
  ];
  return(
    <div>
      <Count></Count>
        <AllUsers></AllUsers>
        <Users></Users>
        <RandomUsers></RandomUsers>
        {allInfo.map(info => 
        <Person data={info} key={info.id}></Person>
        )}
    </div>
  )
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

//json placeholder api
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
          users.map(user => <li key={user.id}>{user.name}</li>)
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
          users.map(user => <li key={user.username}>{user.email}</li>)
        }
        {console.log(users)}
      </ol>
    </div>
  )
}

// random users api

//Method 1:
function RandomUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=10') 
    .then(res => res.json())
    .then(data => setUsers(data.results));
  },[])
  return(
    <div>
      <h1>Random Users: {users.length}</h1>
      <ol>
        {
          users.map(user => 
          <li key={user.id.value}>{user.name.first}</li>
          )
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


//Note: understanding



