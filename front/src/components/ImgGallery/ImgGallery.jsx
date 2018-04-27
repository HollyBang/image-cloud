import React, { Component } from 'react';
import axios from 'axios';

class ImgGallery extends Component {
    constructor(props) {
        super(props);
        
        this.imagesReq = this.imagesReq.bind(this);
    }
    

    imagesReq = () => {
        axios.get('http://localhost:4200/getimages').then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.imagesReq}>Get Images</button>
            </div>
        );
    }
}

export default ImgGallery;