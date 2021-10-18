import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Home/NavBar/NavBar';
function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
    <Switch>
<Route path='/'>
<Home></Home>
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
