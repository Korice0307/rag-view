import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './page/HomePage';
import ResultPage from './page/view/ResultPage';
import Sidebar from './page/Sidebar';
import View202 from './page/view/View202';
import View203 from './page/view/View203';
import View204 from './page/view/View204';
import View303 from './page/view/View303';
import View304 from './page/view/View304';
import View305 from './page/view/View305';

function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ResultPage" element={<ResultPage />} />
            <Route path="/View202" element={< View202/>} />
            <Route path="/View203" element={< View203/>} />
            <Route path="/View204" element={< View204/>} />
            <Route path="/View303" element={< View303/>} />
            <Route path="/View304" element={< View304/>} />
            <Route path="/View305" element={< View305/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
