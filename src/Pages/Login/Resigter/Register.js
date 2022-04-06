import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Footer/Footer';
import NavigationBar from '../../NavigationBar/Navbar';
import './Register.css'
import { createUserWithEmailAndPassword } from "firebase/auth";

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
        <div>
            <NavigationBar></NavigationBar>
            <h2 className="my-5">Please Register</h2>
            <Container>
            <div className="py-5 marginXll">
                   
                    <form onSubmit={handleRegister}>
                    <input type="text" className="form-control" placeholder="Enter User Name" /><br />
                    <input onBlur={handleEmailchange} type="email" className="form-control" placeholder="Email" /> <br/ >
                    <input onBlur={handlePasschange } type="password" className="form-control" placeholder="Password" /><br />
                    
                    <input type="submit" className="btn-secondary px-5 py-2" value="Register" />
                        </form>
                    <p className="my-3">Already register ?<Link to="/login"> Log In</Link></p>
                    <button onClick={signInUsingGoogle} className="btn-secondary my-2 px-5 py-2">Google Sign In</button>
            </div>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Register;