import Home from "./bookingpages/HomePage";
import Register from "./auth/RegisterPage";
import Login from "./auth/LoginPage";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';//Note- here we are using version 5 of react-router-dom

import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        {/* without exact home page will get rendered even if login page is requested */}
        <Route path='/login' exact component={Login}></Route>
        <Route path='/register' exact component={Register}></Route>

      </Switch>
    </Router>
  );
}

export default App;
