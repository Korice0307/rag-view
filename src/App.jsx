import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './view/HomePage';
import ExamplePage from './view/ExamplePage';
import ExamplePage2 from './view/ExamplePage2';
import Sidebar from './component/Sidebar';
import GRI200 from './view/GRI/GRI200';
import GRI300 from './view/GRI/GRI300';
import GRI400 from './view/GRI/GRI400';

function App() {
  return (
    <Router>
      <div className="app">
        {/* 添加 Header */}
        <header className="header">
          <h1 className="header-title">永續知識科技</h1>
          <button className="back-home-button">
            <Link to="/">回到主畫面</Link>
          </button>
        </header>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ExamplePage" element={<ExamplePage />} />
            <Route path="ExamplePage2" element={<ExamplePage2 />} />
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
