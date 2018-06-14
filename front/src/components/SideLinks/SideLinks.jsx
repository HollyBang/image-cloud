import React, {Component} from 'react';
import { Link } from "react-router-dom";


import './SideLinks.css';

const SideLinks = () => {

        return (
            <div className="side-links">
                <ul>
                    <li>
                        <Link to="/">Upload Image</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery Images</Link>
                    </li>
                </ul>
                
            </div>
        );
};

export default SideLinks;