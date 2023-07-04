import logo from './logo.svg';
import './App.css';
import Navbar from './Homepage/Navbar';
import Indexhome from './Homepage/indexhome';
import Footer from './Homepage/footer';
import Router from './mainRouter/Router';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
