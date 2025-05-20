import About from './Aboutme/about';
import './App.css';
import Home from './Home/home';
import Navbar from './Navbar/navbar';
import Myskill from './Skills/myskill';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Myskill/>
    </div>
  );
}

export default App;
