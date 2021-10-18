import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './Pages/Home/About/About';
import Gallary from './Pages/Home/Gallary/Gallary';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Home/NavBar/NavBar';
import Services from './Pages/Home/Services/Services';
function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
    <Switch>
<Route path='/'>
<Home></Home>
<About></About>
<Services></Services>
<Gallary></Gallary>
</Route>
<Route path='/home'>
<Home></Home>
</Route>
    </Switch>
    
    
    </BrowserRouter>

    </div>
  );
}

export default App;
