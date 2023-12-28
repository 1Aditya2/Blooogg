import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

function NotLogged() {
  // const user=useAppSelector((state)=>state.userReducer.user)
  // console.log(user,'user exists');

  const login = localStorage.getItem('userId')

  return (
    <div>
      {login ? <Navigate to={'/'} /> : <Outlet />}
    </div>
  )
}

export default NotLogged