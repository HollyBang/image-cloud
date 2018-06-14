import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './Header.css';
import ContactForm from '../../components/UI/example/ContactForm.jsx';
import CircleForm from '../../components/UI/CircleForm/CircleForm.jsx';

class Header extends Component {

    constructor() {
        super();
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    submit = values => {
        // print the form values to the console
        console.log(values)
    }

    render() {
        return (
            <div className="header">
                <a className="header-link" href="" onClick={this.handleClick}>LOGIN</a>
                <a className="header-link" href="">REGISTRATION</a>
                {/* <ContactForm  onSubmit={this.submit} /> */}
                {/* <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                   
                </CSSTransitionGroup> */}
                <CircleForm />
            </div>
        );
    }
};

export default Header;