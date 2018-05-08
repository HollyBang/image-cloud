import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './ImgGallery.css';

import getGallery from '../../actions/getGallery';

class ImgGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
        this.imagesReq = this.imagesReq.bind(this);
    }


    imagesReq = () => {
        this.props.getGallery();
        this.setState({
            isLoading: true
        });
    }

    render() {
        console.log('gallery', this.props.gallery);
        let { gallery } = this.props;
        let content;
        if (gallery.length <= 0) {
            content = (<button onClick={this.imagesReq}>Get Images</button>)
        } else {
            content =
                (<div className='gallery-content'>
                    {/* //TODO: create new stateless component instead this */}
                    {this.props.gallery.map((item) => {
                        return (
                            <div key={item.id} className='gallery-image'>
                                <img src={item.image}  alt="lol" />
                            </div>
                        )
                    })}
                </div>)
        }

        let preload = 
        <div className="container">
            <div className="item item-1"></div>
            <div className="item item-2"></div>
            <div className="item item-3"></div>
            <div className="item item-4"></div>
        </div>
        
        return (
            <div>
                {this.state.isLoading && gallery.length <= 0 ? preload : null}
                {content}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    getGallery,
}, dispatch);

const mapStateToProps = state => ({
    gallery: state.getGallery.imgGallery

});


export default connect(mapStateToProps, mapDispatchToProps)(ImgGallery);

