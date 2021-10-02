import React, { useState } from 'react';
import Login from '../Login';
import '../App.css';


function Home() {

  const [user, setUser] = useState('');

  return (
    <div className="head-cont">
      <h1 className="company text-center">POTENTIAL
      <br></br>
      ENIGMA</h1>
      <Login></Login>
    </div>
  );
}

export default Home;