import '../src/styles/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import DisplayProject from './pages/DisplayProject';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='*' element={<Navigate to={"/"} />} />
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects/:id' element={<DisplayProject />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App;
