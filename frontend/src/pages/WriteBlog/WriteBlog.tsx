import React, { useState } from 'react'
import './WriteBlog.scss'
// import defImg from '../../assets/user.png'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { createBlog } from '../../redux/blogSlice';
import { useAppDispatch } from '../../redux/store';
function WriteBlog() {
  const dispatch=useAppDispatch()
  const [title,setTitle]=useState<string>('')
  const [blogImage, setblogImage] = useState<any>('https://picsum.photos/1200/300');
  const [content,setContent]=useState<string>('')
  const [category,setCategory]=useState<string>('All')
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files: FileList | null = e?.target?.files;
    if (files) {
      const filereader = new FileReader();
      filereader.readAsDataURL(files[0]);
      filereader.onload = () => {
        if (filereader.readyState === filereader.DONE) {
          setblogImage(filereader.result);
        }
      };
    }
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(title);
    
    console.log(category);
    console.log(content);
    dispatch(createBlog({title,category,content,blogImage}))
    
    
   
    // console.log(e);
    
    // console.log(content);
  


  }
  return (
    <div className='writeblog center'>
      <div className="write-cont">
        <form action="submit" onSubmit={handleSubmit} className='form'>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' placeholder='Enter the title of your blog!' onChange={(e)=>setTitle(e.target.value)} value={title}/>


          <div className="radios">
            <label htmlFor="all"><input type="radio" name="category" id="all" value='All' defaultChecked onChange={(e)=>setCategory(e.target.id)}/>All</label>
            <label htmlFor="arts"><input type="radio" name='category' id='arts' onChange={(e)=>setCategory(e.target.id)}/>Arts</label>
            <label htmlFor="science"><input type="radio" name="category" id="science" onChange={(e)=>setCategory(e.target.id)}/>Science</label>
            <label htmlFor="games"><input type="radio" name="category" id="games" onChange={(e)=>setCategory(e.target.id)}/>Games</label>
            <label htmlFor="home"><input type="radio" name="category" id="home" onChange={(e)=>setCategory(e.target.id)}/>Home</label>
            <label htmlFor="health"><input type="radio" name="category" id="health" onChange={(e)=>setCategory(e.target.id)}/>Health</label>
            <label htmlFor="technology"><input type="radio" name="category" id="technology" onChange={(e)=>setCategory(e.target.id)}/>Technology</label>
            <label htmlFor="recreation"><input type="radio" name="category" id="recreation" onChange={(e)=>setCategory(e.target.id)}/>Recreation</label>
            <label htmlFor="business"><input type="radio" name="category" id="business" onChange={(e)=>setCategory(e.target.id)}/>Business</label>
            <label htmlFor="society"><input type="radio" name="category" id="society" onChange={(e)=>setCategory(e.target.id)}/>Society</label>
            <label htmlFor="sports"><input type="radio" name="category" id="sports" onChange={(e)=>setCategory(e.target.id)}/>Sports</label>
          </div>
          <div className="input-user-img">
            <label htmlFor="">Add blog image</label>
            <label htmlFor="inputImg" className="labelImg">

              <img src={blogImage} alt="" />
            </label>
            <input
              type="file"
              className="inputImg"
              id="inputImg"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <label htmlFor="content">Content</label>
          <ReactQuill theme="snow" placeholder="Enter your content here..." preserveWhitespace  onChange={(e)=>setContent(e)}/>

          <button className='btn-primary'>Publish</button>

        </form>
      </div>
    </div>
  )
}

export default WriteBlog