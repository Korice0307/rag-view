import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './view/HomePage';
import ExamplePage from './view/ExamplePage';
import Sidebar from './component/Sidebar';
// import View202 from './view/view/View202';
// import View203 from './view/view/View203';
// import View204 from './view/view/View204';
// import View303 from './view/view/View303';
// import View304 from './view/view/View304';
// import View305 from './view/view/View305';

function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
           <Route path="/ExamplePage" element={<ExamplePage />} />
            {/* <Route path="/View202" element={< View202/>} />
            <Route path="/View203" element={< View203/>} />
            <Route path="/View204" element={< View204/>} />
            <Route path="/View303" element={< View303/>} />
            <Route path="/View304" element={< View304/>} />
            <Route path="/View305" element={< View305/>} />  */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
