import React from 'react';
import './CircleForm.css';

const CircleForm = (props) => {
    console.log(props);
    const { toggleClass } = props;
    return (
        <div className={`pop-up-circle ${toggleClass}`}></div>
    );
};

export default CircleForm;