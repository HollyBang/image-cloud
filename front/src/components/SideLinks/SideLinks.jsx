import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ContactForm from '../UI/example/ContactForm.js';

import './SideLinks.css';

class SideLinks extends Component {

    submit = values => {
        // print the form values to the console
        console.log(values)
      }

    render() {
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
                <ContactForm onSubmit={this.submit} />
            </div>
        );
    }
};

export default SideLinks;