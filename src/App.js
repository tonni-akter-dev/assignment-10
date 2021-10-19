import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import initializeAuthentication from './Firebase/firebase.init';
import About1 from './Pages/About1/About1';
import Footer from './Pages/Footer/Footer';
import Doctors from './Pages/Home/Doctors/Doctors';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Home/NavBar/NavBar';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Services from './Pages/Home/Services/Services';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Apponitment from './Pages/Apponitment/Apponitment';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
initializeAuthentication();
function App() {
  return (
    <div className="font">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/about1'>
              <About1></About1>
            </PrivateRoute>
            <PrivateRoute path='/doctors'>
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
        <Route exact path='/blogs'>
          <Blog></Blog>
        </Route>
            {/* Service */}
            <Route path='/service'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/serviceDetails/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            {/* appointment */}
            <PrivateRoute exact path='/appointment'>
              <Apponitment></Apponitment>
            </PrivateRoute>
            
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
