import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './ContactForm.css';

let ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
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
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm