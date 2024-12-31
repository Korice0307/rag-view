import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './page/HomePage';
import ResultPage from './page/view/ResultPage';

function App() {
  return (
    <Router>
      <img src="/images/龍華logo"></img>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}


export default App;
