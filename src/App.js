 
import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Main from './Components/Main/Main.jsx';
import Navbar from "./Components/Navbar/Navbar.jsx";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Main> </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
