import React, { useEffect, useState } from 'react'
import './BlogView.scss'
import defImg from '../../assets/user.png'
import { useAppSelector } from '../../redux/store'
import { useParams } from 'react-router-dom'
import { blogType } from '../../redux/blogSlice'
function BlogView() {
  const blogs=useAppSelector((state)=>state.blogReducer.blogs)
  const [blogId,setBlogId]=useState<blogType>()
  const param=useParams()
  useEffect(()=>{
    blogs.forEach((each)=>{
      if(each._id==param.id){
        setBlogId(each)
        
      }
    })
    
    
  },[])
  
  
  return (
    <div className='blogView center'>
        <div className="blog-cont">
          <div className="top">
            <div className="blogImg">
              <img src={blogId?.blogImage.url} alt="" />
            </div>
            <div className="blogUser">
              <ul>
                <li className='userImg'><img src={blogId?.owner.pfp.url} alt="" /></li>
                <li>{blogId?.owner.username}</li>
                <li>Yesterday</li>
                <li><i className="fa-solid fa-heart btn"></i></li>
                <li><i className="fa-solid fa-comment btn"></i></li>
                <li><i className="fa-solid fa-bookmark btn"></i></li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className="title"><h1>{blogId?.title}</h1></div>
            <div className="content"><p>{blogId?.content}</p></div>
          </div>
        </div>
    </div>
  )
}

export default BlogView