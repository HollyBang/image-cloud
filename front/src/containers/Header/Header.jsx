import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Header.css';

import signup from '../../actions/signup';
import signin from '../../actions/signin';

import CircleForm from '../../components/UI/CircleForm/CircleForm.jsx';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            formToggle: true
        };


        this.registrationClick = this.registrationClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    registrationClick() {
        this.setState({
            formToggle: true
        });
        this.handleClick();
    }
    loginClick() {
        this.setState({
            formToggle: false
        });
        this.handleClick();
    }

    submit(values) {
        const { signup, signin } = this.props;
        const { formToggle } = this.state;

        let behaviorSubmit = formToggle ? signup : signin;
        behaviorSubmit(values);
        console.log(values);
    }

    render() {
        const { isToggleOn, formToggle } = this.state;
        return (
            <div className="header">
                <a className="header-link" onClick={this.loginClick}>LOGIN</a>
                <a className="header-link" onClick={this.registrationClick}>REGISTRATION</a>
                <CSSTransition
                    in={isToggleOn}
                    classNames="circle-form"
                    unmountOnExit
                    timeout={600}>
                    <CircleForm clicked={this.handleClick} formFlag={formToggle} onSubmit={this.submit} />
                </CSSTransition>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    signup,
    signin
}, dispatch);

export default connect(null, mapDispatchToProps)(Header);