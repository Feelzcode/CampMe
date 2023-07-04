import logo from './logo.svg';
import './App.css';
import Navbar from './Homepage/Navbar';
import Indexhome from './Homepage/indexhome';
import Footer from './Homepage/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Indexhome/>
      <Footer/>
    </div>
  );
}

export default App;
