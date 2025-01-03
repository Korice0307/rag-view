import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [open200, setOpen200] = useState(false);
    const [open300, setOpen300] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const toggleDropdown200 = () => {
        setOpen200(!open200);
    };

    const toggleDropdown300 = () => {
        setOpen300(!open300);
    };

    return (
        <div>
            <button onClick={toggleSidebar} className="toggle-button">
                {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
            </button>
            {isSidebarVisible && (
                <div className="sidebar">
                    <h3>列表</h3>
                    <ul>
                        <li><Link to="/ExamplePage">範例</Link></li>
                        <li>
                            <div onClick={toggleDropdown200}>
                                GRI
                            </div>
                            {open200 && (
                                <ul className="dropdown">
                                    <li><Link to="/GRI200">GRI200</Link></li>
                                    <li><Link to="/GRI300">GRI300</Link></li>
                                    <li><Link to="/GRI400">GRI400</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <div className='backhome'>
                        <Link to="/">回到主畫面</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
