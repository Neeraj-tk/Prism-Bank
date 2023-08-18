import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="images/logo.jpg" className='App-logo'></img>
        <h1>Prism Bank</h1>
      </header>
      <section>
        <div className='main'>
          <Router>
            <NavBar></NavBar>
          <Routes>
              <Route path='/' exact Component={HomePage}></Route>
              {/* <Route path="/register" Component={Register}></Route>
              <Route path='/login' Component={Login}></Route>
              <Route path='/product' Component={Product}></Route> */}
            </Routes>
          </Router>
        </div>
      </section>
    </div>
  );
}

export default App;
