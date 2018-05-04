import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './ImgGallery.css';

import getGallery from '../../actions/getGallery';

class ImgGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
        this.imagesReq = this.imagesReq.bind(this);
    }


    imagesReq = () => {
        this.props.getGallery();
    }

    render() {
        console.log('gallery',this.props.gallery);
        return (
            <div>
                <button onClick={this.imagesReq}>Get Images</button>
                <div className='gallery-content'>
                {/* //TODO: вынести в отдельный компонент */}
                    {this.state.img.map((item) => {
                        return (
                            <div className='gallery-image'>
                                <img src={item} alt="lol" />
                            </div>
                        )
                    })}
                </div>



            </div>
        );
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    getGallery,
  }, dispatch);

const mapStateToProps = state => ({
    gallery: state.getGallery.ImgGallery

});
  

export default connect(mapStateToProps, mapDispatchToProps)(ImgGallery);