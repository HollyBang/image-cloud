import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Header.css';

import CircleForm from '../../components/UI/CircleForm/CircleForm.jsx';

class Header extends Component {

    constructor() {
        super();
        this.state = { isToggleOn: false };


        this.handleClick = this.handleClick.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    submit(values) {
        // print the form values to the console
        console.log(values)
    }

    render() {
        const { isToggleOn } = this.state;
        return (
            <div className="header">
                <a className="header-link" onClick={this.handleClick}>LOGIN</a>
                <a className="header-link" href="">REGISTRATION</a>
                <CSSTransition
                    in={isToggleOn}
                    classNames="circle-form"
                    unmountOnExit
                    timeout={600}>
                    <CircleForm clicked={this.handleClick}  onSubmit={this.submit}/>
                </CSSTransition>
            </div>
        );
    }
};

export default Header;