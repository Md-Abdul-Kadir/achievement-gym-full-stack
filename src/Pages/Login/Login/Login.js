import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Footer/Footer';
import NavigationBar from '../../NavigationBar/Navbar';
import './Login.css'

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
        <div >
            <NavigationBar></NavigationBar>
            <h2 className="my-5">Please Log in</h2>
            <Container>
            <div className="y-5 marginXl">
                   
                <form onSubmit={handleLogin}>
                <input onBlur={handleEmailchange} type="email" className="form-control" placeholder="Email" /> <br/ >
                <input onBlur={handlePassChange} type="password" className="form-control" placeholder="Password" /><br />
                <input type="submit" className="btn-secondary px-5 py-2" value="Login" />
               </form>
                    <p className="my-4">New to Achevement Gym ?<Link to="/register"> Register</Link></p>
                    <button onClick={signInUsingGoogle} className="btn-secondary px-5 py-2 ">Google Sign In</button>
            </div>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;