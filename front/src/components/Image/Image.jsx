import React from 'react';
import FontAwesome from 'react-fontawesome';

import './Image.css';

const Image = (props) => {
    return (
        <figure className="card-templet"><img src={props.item.link} alt="No img" />
            <figcaption>
                <h3>Send Mail </h3>
                <p>We can send this image to your email</p>
            </figcaption><FontAwesome tag={'i'} name='fas fa-trash-alt'  />
            
        </figure>
    );
};

export default Image;
