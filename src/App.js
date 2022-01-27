import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import CharacterPage from './Components/CharacterPage';
import Navbar from './Components/partials/Navbar';
import Footer from './Components/partials/Footer';
import Search from './Components/Search';
function App() {
 
  return (
    <div>
      <Navbar/>
      <Router>
      <Search/>
        <Routes>
          <Route exact path='/marvel' element={<Home/>}/>
          <Route exact path='/character/:token' element={<CharacterPage/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
