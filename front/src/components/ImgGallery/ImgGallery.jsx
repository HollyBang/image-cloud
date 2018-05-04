import React, { Component } from 'react';
import axios from 'axios';
import './ImgGallery.css';

class ImgGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
        this.imagesReq = this.imagesReq.bind(this);
    }


    imagesReq = () => {
        axios.get('http://localhost:4200/getimages').then((response) => {
            console.log(response);
            this.setState({
                img: response.data
            });
        });
    }

    render() {
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

export default ImgGallery;