import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Register from './components/Register';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import RegisterForInternetBanking from './components/RegisterForInternetBanking';
import Login from './components/Login';
import Admin from './components/Admin';

import {library} from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faList, faHome, faSignIn, faSignOut, faCameraRetro, faBomb, faCoffee, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash,faEdit,faList, faHome, faSignIn, faSignOut, faCameraRetro, faBomb, faCoffee, faPeopleGroup);


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      <img src="images/logo.jpg" className='App-logo'></img>
        <h1>Prism Bank</h1>
      </header> */}
      <section>
        <div className='main'>
          <Router>
            <NavBar ></NavBar>
          <Routes>
              <Route path='/' exact Component={HomePage}></Route>
              <Route path="/register" Component={Register}></Route>
              <Route path="/netbanking" Component={RegisterForInternetBanking}></Route>
              <Route path='/login' Component={Login}></Route>
              <Route path='/admin' Component={Admin}></Route> 
            </Routes>
          </Router>
        </div>
      </section>
    </div>
  );
}

export default App;
