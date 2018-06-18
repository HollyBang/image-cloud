import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import './Image.css';

class Image extends Component {
    constructor(props) {
        super(props);
        
        this.deleteImage = this.deleteImage.bind(this);
    }

    deleteImage(){
        this.props.deleteImg();
    }
    
    render() {
        return (
            <figure className="card-templet"><img src={this.props.item.link} alt="No img" />
                <figcaption>
                    <h3>Send Mail </h3>
                    <p>We can send this image to your email</p>
                </figcaption><FontAwesome tag={'i'} name='fas fa-trash-alt' />
            </figure>
        );
    };
}
//TODO:test
// const mapDispatchToProps = dispatch => bindActionCreators({
    
// }, dispatch);

// const mapStateToProps = state => ({
    
// });

export default Image;
