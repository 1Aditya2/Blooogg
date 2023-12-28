import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getUserProfile } from '../../redux/userSlice'

function Protect() {
  const dispatch = useAppDispatch()
  // const user=useAppSelector((state)=>state.userReducer.user)
  const login = localStorage.getItem('userId')

  useEffect(() => {
    dispatch(getUserProfile())

  }, [])

  return (
    <div>
      {login ? <Outlet /> : <Navigate to={'/signin'} />}
    </div>
  )
}

export default Protect