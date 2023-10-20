import React, { useState } from 'react';
import './App.css';
import { signInWithGoogle } from './Firebase';

function App() {
  const [pic, setPic] = useState(localStorage.getItem('pic'));
  const [name, setName] = useState(localStorage.getItem('name'));
  const [email, setEmail] = useState(localStorage.getItem('email'));

  const handleSignIn = async () => {
    const user = await signInWithGoogle();
  
    // Now the user object is defined, so you can access its properties safely.
    setPic(user.photoURL);
    setName(user.displayName);
    setEmail(user.email);
    console.log(user.photoURL);
  };
  

  return (
    <div className="App">
      <img src={pic} alt="" />
      <span>{name || 'Not signed in'}</span>
      <span>{email || 'Not signed in'}</span>
      <button className="appSignup" onClick={handleSignIn}>
        Sign In with Google
      </button>
    </div>
  );
}

export default App;
