import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './ImgGallery.css';

import getGallery from '../../actions/getGallery';
import Image from '../Image';
import Loader from '../UI/loader/Loader.jsx';

class ImgGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
        this.imagesReq = this.imagesReq.bind(this);
    }


    imagesReq() {
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
                    {this.props.gallery.map((item, i) => {
                        return (
                                <Image key={i} item={item} />
                        )
                    })}
                </div>)
        }

        return (
            <div>
                {this.state.isLoading && gallery.length <= 0 ? <Loader /> : null}
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

