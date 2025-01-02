import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>列表</h3>
            <ul>
                <li><Link to="/ResultPage">页面 1</Link></li>
                <li><Link to="/testView">測試</Link></li>
            </ul>
            <div className='backhome'><Link to="/">回到主畫面</Link></div>
        </div>
    );
};

export default Sidebar;
