import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
     <Routes>
     <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
