import 'bootstrap/dist/css/bootstrap.min.css';
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
initializeAuthentication();
function App() {

  return (
    <div>
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
     </AuthProvider>
    </div>
  );
}

export default App;
