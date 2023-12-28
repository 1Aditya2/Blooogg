import React, { useState } from 'react'
import './Navbar.scss'
import defImg from '../../assets/user.png'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/store'
function Navbar() {
  const user=useAppSelector((state)=>state.userReducer.user)
  console.log(user);
  
  const navigate=useNavigate()
  const login=localStorage.getItem('userId')
  // const [login,setLogin]=useState(true)
  function handleClick(){
    navigate('/')
  }
  function handleSubmit(){

  }
  return (
    <>
    <div className='navbar center'>
      <div className="nav-items">
        <div className="logo center" onClick={handleClick}>Blooog</div>
        <div className="searchbar">
          <form onSubmit={handleSubmit}>
            <input type="text" className='searchbox' placeholder='search any blog...' />
          </form>

        </div>
        <div className="ops">
          {user?<div className='list-items'>
            <ul className='ul-list'>
              <li className='btn-primary' onClick={()=>navigate('/write')}>Write</li>
              <li className='btn-secondary'>Saved</li>
              <li className='btn-secondary'>My Blogs</li>
              
            </ul>
            <div className='labelImg'><img src={user?.pfp.url} alt="" /></div>
            </div>:<div className='list-items'>
            <ul className='ul-list'>
              <li className='btn-primary' onClick={()=>navigate('/signin')}>Login</li>
              <li className='btn-secondary' onClick={()=>navigate('/signup')}>Signup</li>
            </ul>
          </div>}
        </div>
      </div>
      
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar