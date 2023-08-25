import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Register from './components/Register';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import AddBeneficiary from './AddBeneficiary'; 
import ManageBeneficiary from './ManageBeneficiary'; 


function App() {
  //const [beneficiaries, setBeneficiaries] = useState([]);

  //const handleAddBeneficiary = (newBeneficiary) => {
  //  setBeneficiaries([...beneficiaries, newBeneficiary]);
  //};
import RegisterForInternetBanking from './components/RegisterForInternetBanking';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import { useState } from 'react';


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
              <Route path='/' element={<HomePage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add-beneficiary" Component={<AddBeneficiary />} /> 
              <Route path="/manage-beneficiary" Component={<ManageBeneficiary />} /> 
              {/* <Route path='/login' Component={Login}></Route>
              <Route path='/product' Component={Product}></Route> */}
              <Route path="/netbanking" Component={RegisterForInternetBanking}></Route>
              <Route path='/login' element ={<Login accountNo={accountNo} setAccountNo={setAccountNo} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Login>}></Route>
              <Route path='/profile' element ={<DashBoard accountNo={accountNo} setAccountNo={setAccountNo} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></DashBoard>}></Route>
            </Routes>
          </Router>
        </div>
      </section>
    </div>
  );
}


export default App;
