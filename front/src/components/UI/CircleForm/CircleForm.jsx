import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './CircleForm.css';

let CircleForm = (props) => {
    const { handleSubmit, clicked } = props;
    return (
        <div className={`pop-up-circle`}>
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                <div onClick={clicked} >CLOSE</div>
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
    // a unique name for the form
    form: 'contact'
  })(CircleForm)

export default CircleForm;