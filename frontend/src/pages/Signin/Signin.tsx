import React, { useState } from 'react'
import '../Signup/Signup.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Signin() {
  const [username, setUserName] = useState("")

  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4000/user/signin", {
        username,
        password
      });
      if (result !== undefined) {
        console.log('signin result at frontend', result);
        navigate('/')
      }

    }

    catch (error) {
      // console.log('signup error at frontend',error);
    }
  }
  return (
    <div className='signup'>
      <div className="signup-box">
        <h1 className="heading">SignIn</h1>
        <form onSubmit={handleSubmit}>



          <label htmlFor="name">Username</label>
          <input type="text" id="name" className="name" onChange={(e) => setUserName(e.target.value)} />



          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="password" onChange={(e) => setPassword(e.target.value)} />

          <input type="submit" className="submit" />
        </form>
        <p>--or--</p>
        <Link to="/signup">
          <p>Create an account!</p>
        </Link>
      </div>
    </div>
  )
}

export default Signin