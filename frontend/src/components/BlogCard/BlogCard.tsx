import React from 'react'
import './BlogCard.scss'
import defImg from '../../assets/user.png'
import { blogType } from '../../redux/blogSlice'
import { useNavigate } from 'react-router-dom'
// import { blog } from '../../pages/Landing/Landing'
function BlogCard(props:blogType) {
  const login=localStorage.getItem('userId')
  const navigate=useNavigate()
  function handleClick(){

    if(login){
      navigate(`${props._id}`)
      
    }
    else{
      alert('Login to view the blog!')

    }
  }
  return (
    <div className='blogcard' onClick={handleClick}>
      <div className="left">
        <img src={props.blogImage.url} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <div className="owner">
            <div className="pfp"><img src={props.owner.pfp.url} alt="" /></div>
            <div className="usrname">@{props.owner.username}</div>
          </div>
          <div className="title"><h2>{props.title}</h2></div>
          <div className="content"><p>{props.content}</p></div>
        </div>
        <div className="bottom">
          <div className="time">Yesterday</div>
          <div className="likes">
            <i className="fa-solid fa-heart" style={{ color: 'red' }}></i>
            {props.likes.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard