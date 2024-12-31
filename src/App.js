import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './page/HomePage';
import ResultPage from './page/view/ResultPage';
import Sidebar from './page/Sidebar';
import testView from './page/view/testView';

function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ResultPage" element={<ResultPage />} />
            <Route path="/testView" element={<testView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
