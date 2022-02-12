import './App.css';
import Main from './components/Homepage/Main';
import Homepage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/About';
import ContactUs from './components/ContactUs/Contact';
import BeautyCo from './components/Beauty&Co/BeautyCo';
import MenCategories from './components/MenCategories/MenCategories';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ManSalons from './components/ManSaloons/ManSalons';
import Cart from './components/Cart/Cart';
import JoinUs from './components/JoinUs/joinus';
import BookAppointment from './components/BookAppointment/BookAppointment';
import { BrowserRouter as Router,
  Route,Switch,Link } from 'react-router-dom';
import ScrolltoTop from './ScrolltoTop';


function App() {
  return (
    <>
      {/* <div className='container'> */}
    {/* <Main /> */}
    {/* <BeautyCo /> */}
    <Router>
    {/* <Homepage /> */}
    <ScrolltoTop />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/mencategories' component={MenCategories} />
        <Route path='/beautyco' component={BeautyCo} />
        <Route path='/mansalons' component={ManSalons} />
        <Route path='/Cart' component={Cart} />
        <Route path='/bookapp' component={BookAppointment} />
        <Route path='/joinus' component={JoinUs} />

       
       </Switch>
      </Router>
      {/* </div> */}
    </>
  );
}

export default App;
