import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Footer/Footer';
import NavigationBar from '../../NavigationBar/Navbar';
import './Register.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import g from '../../../Images/google.png'

const Register = () => {
    const {signInUsingGoogle,auth,setuser,registerWithMailandPass } = useAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailchange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePasschange = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    const handleRegister = e => {
        console.log(email, password);
        registerWithMailandPass(email,password);
        e.terminate();
    }

    return (
        <div className='magic'>
            <NavigationBar></NavigationBar>
            
           
            <h2 className="my-5 pt-5 text-light">Please Register</h2>
            <div className="py-5 marginXll">
                   
                    <form onSubmit={handleRegister}>
                    <input type="text" className="form-control mx-auto w-50" placeholder="Enter User Name" /><br />
                    <input onBlur={handleEmailchange} type="email" className="form-control w-50 mx-auto" placeholder="Email" /> <br/ >
                    <input onBlur={handlePasschange } type="password" className="form-control w-50 mx-auto" placeholder="Password" /><br />
                    
                    <input type="submit" className="btn-secondary px-5 py-2 btn" value="Register" />
                        </form>
                    <p className="my-3 text-light">Already register ?<Link to="/login"> Log In</Link></p>
                    <button onClick={signInUsingGoogle} className="btn-light my-2 px-5 py-2 btn shadow"><img src={g} className="pe-2" width="28px" height="20px" alt="Google icon"/> Sign in with Google</button>
            </div>
             
          <Footer></Footer>
        </div>
    );
};

export default Register;