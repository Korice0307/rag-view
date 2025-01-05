import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './view/HomePage';
import ExamplePage from './view/ExamplePage';
import Sidebar from './component/Sidebar';
import GRI200 from './view/GRI/GRI200';
import GRI300 from './view/GRI/GRI300';
import GRI400 from './view/GRI/GRI400';

function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ExamplePage" element={<ExamplePage />} />
            <Route path="/GRI200" element={<GRI200 />} />
            <Route path="/GRI300" element={<GRI300 />} />
            <Route path="/GRI400" element={<GRI400 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
