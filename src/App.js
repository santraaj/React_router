import './App.css';
import About from './About.js';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to React Router!</h1>
      </header>  
      <BrowserRouter>
        <Link className="Link" to="/">Home</Link>{''}
        <Link className="Link" to="/about">About</Link>{''}
        <Link className="Link" to="/contact">Contact</Link>{''}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
