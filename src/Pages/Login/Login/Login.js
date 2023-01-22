import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Footer/Footer';
import NavigationBar from '../../NavigationBar/Navbar';
import './Login.css'
import g from '../../../Images/google.png'

const Login = () => {
    const [ email, setemail ] = useState('');
    const [ pass, setpass ] = useState('');
    const { signInUsingGoogle, user,signinMailandPass } = useAuth();
   

    const handleEmailchange = e => {
         setemail(e.target.value);
        // console.log(email);
        
    }
    const handlePassChange = e => {
        setpass(e.target.value);
        // console.log(pass);
       
    }
    const handleLogin = e => {
        // console.log(email);
        // console.log(pass);
        signinMailandPass(email, pass);
        e.preventDefault();
    }
    return (
        <div className='magic'>
            <NavigationBar></NavigationBar>
            <h2 className="my-5 pt-5 text-light">Please Log in</h2>
            <Container>
            <div className="y-5 marginXl">
                   
                <form onSubmit={handleLogin}>
                <input onBlur={handleEmailchange} type="email" className="form-control w-50 mx-auto" placeholder="Email" /> <br/ >
                <input onBlur={handlePassChange} type="password" className="form-control w-50 mx-auto" placeholder="Password" /><br />
                <input type="submit" className="btn-secondary px-5 py-2 btn" value="Login" />
               </form>
                    <p className="my-4 text-light">New to Achevement Gym ?<Link to="/register"> Register</Link></p>
                    <button onClick={signInUsingGoogle} className="btn-light my-2 px-5 py-2 btn shadow"><img src={g} className="pe-2" width="28px" height="20px" alt="Google icon"/> Continue with Google</button>
            </div>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;