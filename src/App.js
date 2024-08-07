import './assets/css/base/_reset.css';
import logo from './logo.svg';
import './App.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewVideo from './pages/NewVideo';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header/>
      {/* <NewVideo/> */}
      <Routes>
        {/* <NewVideo/> */}
        <Route path='/' element={<Home/>}/>
       <Route path='/NewVideo' element={<NewVideo/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
