import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import initializeAuthentication from './Firebase/firebase.init';
import About1 from './Pages/About1/About1';
import Facilities from './Pages/Facilities/Facilities';
import Footer from './Pages/Footer/Footer';
import About from './Pages/Home/About/About';
import Doctors from './Pages/Home/Doctors/Doctors';
// import Gallary from './Pages/Home/Gallary/Gallary';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Home/NavBar/NavBar';
import Pricing from './Pages/Home/Pricing/Pricing';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
// import Specialist from './Pages/Home/Specialist/Specialist';
initializeAuthentication();
function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
 
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about1'>
            <About1></About1>
          </Route>
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
      
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
