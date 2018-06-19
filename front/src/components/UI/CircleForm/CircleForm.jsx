import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FontAwesome from 'react-fontawesome';
import './CircleForm.css';

let CircleForm = (props) => {
    const { handleSubmit, clicked } = props;
    return (
        <div className={`pop-up-circle`}>
            <div className="register-form">
                <form className="signup-form" onSubmit={handleSubmit}>
                <FontAwesome onClick={clicked} tag={'span'} name='far fa-times-circle' />
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

CircleForm = reduxForm({
    form: 'login'
  })(CircleForm)

export default CircleForm;