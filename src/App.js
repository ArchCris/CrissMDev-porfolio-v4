import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Rightbar from './components/Rightbar';
import Leftbar from './components/Leftbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Rightbar/>
      <Leftbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
