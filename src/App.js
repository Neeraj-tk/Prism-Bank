import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Register from './components/Register';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import RegisterForInternetBanking from './components/RegisterForInternetBanking';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import { useState } from 'react';
import Transaction from './components/Transaction';
import Admin from './components/Admin';

import {library} from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faList, faHome, faSignIn, faSignOut, faCameraRetro, faBomb, faCoffee, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import AddBeneficiary from './components/AddBeneficiary';
library.add(faTrash,faEdit,faList, faHome, faSignIn, faSignOut, faCameraRetro, faBomb, faCoffee, faPeopleGroup);


function App() {
  const [accountNo, setAccountNo] = useState(0);
  const [loggedIn,setLoggedIn]=useState(false);
  return (
    <div className="App">
      {/* <header className="App-header">
      <img src="images/logo.jpg" className='App-logo'></img>
        <h1>Prism Bank</h1>
      </header> */}
      <section>
        <div className='main'>
          <Router>
            <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} ></NavBar>
          <Routes>
              <Route path='/' exact element={<HomePage  />}></Route>
              <Route path="/register" Component={Register}></Route>
              <Route path="/netbanking" Component={RegisterForInternetBanking}></Route>
              <Route path="/profile/transaction" element={<Transaction accountNo={accountNo} loggedIn={loggedIn}></Transaction>}></Route>
              <Route path='/login' element ={<Login accountNo={accountNo} setAccountNo={setAccountNo} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Login>}></Route>
              <Route path='/profile' element ={<DashBoard accountNo={accountNo} setAccountNo={setAccountNo} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></DashBoard>}></Route>
              <Route path='/login' Component={Login}></Route>
              <Route path='/admin' Component={Admin}></Route> 
              <Route path='/profile/addBeneficiary' element={<AddBeneficiary accountNo={accountNo} loggedIn={loggedIn}></AddBeneficiary>}></Route>
            </Routes>
          </Router>
        </div>
      </section>
    </div>
  );
}


export default App;
