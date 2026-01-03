import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import { oceanTheme } from './constants/theme';

import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
import About from './pages/About/About';

function App() {
  return (
    <ConfigProvider theme={oceanTheme}>
      <div className='app-container'>
        <Router>
          <Sidebar/>
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </main>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App