import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FontAwesome from 'react-fontawesome';
import './CircleForm.css';

let Form = (props) => {
    const { handleSubmit, clicked, formFlag } = props;
    const formTitle = formFlag ? 'Registration' : 'Login';
    
    return (
        <div className={`pop-up-circle`}>
            <div className="register-form">
                <form className="signup-form" onSubmit={handleSubmit}>
                <FontAwesome onClick={clicked} tag={'span'} name='far fa-times-circle' />
                    <h2 style={{color: 'red'}}>{formTitle}</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                    </div>
                    <div>
                        <label htmlFor="pass">Password</label>
                        <Field name="password" type="password" component="input" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
let CircleForm = compose(connect((state, props) => ({ form: props.formFlag ? 'Registration' : 'Login' })), reduxForm({destroyOnUnmount: false}))(Form);
// CircleForm = reduxForm({
//     form: 'login'
//   })(CircleForm)

export default CircleForm;