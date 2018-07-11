import React from 'react';
import { NavLink } from 'react-router-dom'


import './SideLinks.css';

const SideLinks = () => {

        return (
            <div className="side-links">
                <ul>
                    <li>
                        <NavLink to="/" exact>Upload Image</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" exact>Gallery Images</NavLink>
                    </li>
                </ul>
                
            </div>
        );
};

export default SideLinks;