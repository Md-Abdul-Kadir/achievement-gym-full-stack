import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Aboutus from './Pages/Aboutus/Aboutus';
import OurTrainer from './Pages/OurTrainers/OurTrainer';
import Services from './Pages/Services/Services';
import Pricing from './Pages/Pricing/Pricing';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Resigter/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/Login/privateRoute/PrivateRoute';





function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/aboutus">
           <Aboutus></Aboutus>
          </Route>
          <Route path="/services">
          <Services></Services>
          </Route>
          <PrivateRoute path="/booking/:bookingid">
          <Booking></Booking>
          </PrivateRoute>
          <Route path="/pricing">
          <Pricing></Pricing>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="/ourtrainer">
           <OurTrainer></OurTrainer>
          </Route>
          <Route path="*">
          <Notfound></Notfound>
          </Route>
          
        </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
