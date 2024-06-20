import './assets/css/base/_reset.css';
import logo from './logo.svg';
import './App.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        {/* <Route path='/' element={<Banner/>}/> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
