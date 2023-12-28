import React, { useEffect } from 'react'
import './Landing.scss'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import BlogCard from '../../components/BlogCard/BlogCard'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getAllBlogs } from '../../redux/blogSlice'

function Landing() {
  const Blogs=useAppSelector((state)=>state.blogReducer.blogs)
  const dispatch=useAppDispatch()
  useEffect(() => {
    dispatch(getAllBlogs())
    
  }, [])
  
  return (
    <div className='landing-cont'>
      {/* <Navbar /> */}
      <div className='landing center'>
        <div className="container">
          <div className="filters">
            <ul>
              <li className='btn-secondary'>All</li>
              <li className='btn-secondary'>Arts</li>
              <li className='btn-secondary'>Games</li>
              <li className='btn-secondary'>Home</li>
              <li className='btn-secondary'>Health</li>
              <li className='btn-secondary'>Technology</li>
              <li className='btn-secondary'>Recreation</li>
              <li className='btn-secondary'>Business</li>
              <li className='btn-secondary'>Society</li>
              <li className='btn-secondary'>Sports</li>
              <li className='btn-secondary'>Science</li>
            </ul>
          </div>
          <div className="blog-tiles">
            {Blogs?.map((each) => {
              return <BlogCard key={each._id} title={each.title} likes={each.likes} category={each.category} content={each.content} blogImage={each.blogImage} owner={each.owner} comments={each.comments} _id={each._id}/>
            })}
           
          </div>
        </div>
      </div>

    </div>

  )
}

export default Landing