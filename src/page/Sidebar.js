import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>列表</h3>
            <ul>
                <li><Link to="/ResultPage">範例</Link></li>
                <li><Link to="/View202">RAG202</Link></li>
                <li><Link to="/View203">RAG203</Link></li>
                <li><Link to="/View204">RAG204</Link></li>
                <li><Link to="/View303">RAG303</Link></li>
                <li><Link to="/View304">RAG304</Link></li>
                <li><Link to="/View305">RAG305</Link></li>
            </ul>
            <div className='backhome'><Link to="/">回到主畫面</Link></div>
        </div>
    );
};

export default Sidebar;
