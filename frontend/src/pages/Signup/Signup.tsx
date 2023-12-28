import React, { useState } from 'react'
import './Signup.scss'
import defUserImage from '../../assets/user.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useAppDispatch } from '../../redux/store';
import { userSignup } from '../../redux/userSlice';
import { ToastContainer } from 'react-toastify';
function Signup() {
    const dispatch=useAppDispatch()
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pfp, setpfp] = useState<any>(defUserImage);
    const navigate = useNavigate()
    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files: FileList | null = e?.target?.files;
        if (files) {
            const filereader = new FileReader();
            filereader.readAsDataURL(files[0]);
            filereader.onload = () => {
                if (filereader.readyState === filereader.DONE) {
                    setpfp(filereader.result);
                }
            };
        }
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(userSignup({username,email,password,pfp}))
        if(localStorage.getItem('userId')){
            navigate('/')
        }
    }
    return (
        <div className='signup'>
            <div className="signup-box">
                <h1 className="heading">SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-user-img">
                        <label htmlFor="inputImg" className="labelImg">
                            <img src={pfp} alt="" />
                        </label>
                        <input
                            type="file"
                            className="inputImg"
                            id="inputImg"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>


                    <label htmlFor="name">Username</label>
                    <input type="text" id="name" className="name" onChange={(e) => setUserName(e.target.value)} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="email" onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="password" onChange={(e) => setPassword(e.target.value)} required />

                    <input type="submit" className="submit" />
                </form>
                <p>--or--</p>
                <Link to="/signin">
                    <p>Already have an account?</p>
                </Link>
            </div>
            
        </div>
    )
}

export default Signup