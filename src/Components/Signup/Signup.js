import React, { useState ,useContext} from 'react';//&we need use the context that we created as (FirebaseContext). so i will import here also
//*now we have all the data stored in the State so now we need upload the data into firebase


import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Signup.css';

export default function Signup() {
  //now im going to take the user data from user using this page .and i will create state for that using that state i will pass the state into firebase. then i will render the authenticate the signup using that state .so i will crete a state now
  const [username,setUsername]=useState('')//i pass the data as a string using ('')
  // i will pass the all the data using setState
  const [email,setEmail] = useState('');// 
  const [phone,setPhone] =useState('');
  const [password,setPassword] =useState('')

  //~now we use the context so we will return as a object.so we need deconstruct that
  const {firebase}=useContext(FirebaseContext) //*now i destructured as a {firebase}

  // now i need send the data through a button click(means signup button) to firebase
  const handleSubmit=(e)=>{
    e.preventDefault()//prevent the page from refreshing
    console.log(firebase)//succesfully console the data using state
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}//i pass the state here
            onChange={(e)=>setUsername(e.target.value)}//this (e) is representing event.  (e.target.value)} means take that value from onchange
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
