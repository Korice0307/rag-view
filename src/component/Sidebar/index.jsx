import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [open200, setOpen200] = useState(false);
    const [openISO, setOpenISO] = useState(false); // ISO 下拉選單的狀態

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const toggleDropdown200 = () => {
        setOpen200(!open200);
    };

    const toggleDropdownISO = () => {
        setOpenISO(!openISO);
    };

    return (
        <div>
            {isSidebarVisible && (
                <div className="sidebar">
                    <h3>列表</h3>
                    <ul>
                        <li><Link to="/ExamplePage">首頁</Link></li>
                        <li>
                            <div onClick={toggleDropdown200} className="dropdown-header">
                                GRI {open200 ? '▲' : '▼'}
                            </div>
                            {open200 && (
                                <ul>
                                    <li><Link to="/GRI200">GRI200</Link></li>
                                    <li><Link to="/GRI300">GRI300</Link></li>
                                    <li><Link to="/GRI400">GRI400</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <div onClick={toggleDropdownISO} className="dropdown-header">
                                ISO {openISO ? '▲' : '▼'}
                            </div>
                            {openISO && (
                                <ul>
                                    <li><Link to="/ISO-14064">ISO-14064</Link></li>
                                    <li><Link to="/ISO-14067">ISO-14067</Link></li>
                                    <li><Link to="/ISO-27001">ISO-27001</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            )}
            <button onClick={toggleSidebar} className="toggle-button">
                {isSidebarVisible ? '▶' : '◀'}
            </button>
        </div>
    );
};

export default Sidebar;
