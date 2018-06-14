import React, { Component } from 'react';
import { CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
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
        const toggleClass = this.state.isToggleOn ? 'off' : 'on';
        return (
            <div className="header">
                <a className="header-link" onClick={this.handleClick}>LOGIN</a>
                <a className="header-link" href="">REGISTRATION</a>
                {/* <ContactForm  onSubmit={this.submit} /> */}
                <TransitionGroup timeout={100}>
                    <CircleForm toggleClass={toggleClass} />
                </TransitionGroup>
            </div>
        );
    }
};

export default Header;