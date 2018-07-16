import React, { Component, Fragment } from 'react';
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

    // shouldComponentUpdate(nextProps) {
    //    return nextProps.gallery.length === this.props.gallery.length
    //    ? false
    //    : true
    // }

    imagesReq() {
        this.props.getGallery();
        this.setState({
            isLoading: true
        });
    }

    render() {

        let { gallery } = this.props;
        let content;
        if (gallery.length <= 0) {
            content = (
                <div className="btn-getGallery">
                    <label onClick={this.imagesReq} className="btn" htmlFor="inputFile">Get Images</label>
                    <input id="inputFile" type="button" name="selectedFile"/>
                </div>
            )
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
            <Fragment>
                {this.state.isLoading && gallery.length <= 0 ? <Loader /> : null}
                {content}
            </Fragment>
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

