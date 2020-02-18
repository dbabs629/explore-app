import React from 'react';
import firebase from './components/firebase/firebase';
import './App.css';

const db = firebase.database().ref('users/dBabs/');
const userList = db;
// function writeUserData(fname, lname, email) {
//   db.set({
//     fname: fname,
//     lname: lname,
//     email: email
//   });
// }

function App() {
  return (
    <div className="App">
{console.log(userList)}
    </div>
  );
}

export default App;
