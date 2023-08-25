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
              <Route path='/' element={<HomePage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add-beneficiary" Component={<AddBeneficiary />} /> 
              <Route path="/manage-beneficiary" Component={<ManageBeneficiary />} /> 
              {/* <Route path='/login' Component={Login}></Route>
              <Route path='/product' Component={Product}></Route> */}
            </Routes>
          </Router>
        </div>
      </section>
    </div>
  );
}

export default App;
