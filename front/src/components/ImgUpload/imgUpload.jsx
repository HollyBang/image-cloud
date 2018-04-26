import React, { Component } from 'react';
import axios from 'axios';


class imgUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: null
        }
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleUploadFile = (event) => {
        const data = new FormData();
        data.append('selectedFile', event.target.files[0]);
        data.append('filename', 'test');
        axios.post('http://localhost:4200/upload', data).then((response) => {
            console.log(response);
        });
        console.log(event.target.files);
        this.setState({
            formData: data
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state.formData;

    }
    render() {
        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name="selectedFile" onChange={this.handleUploadFile} />
                    <button>send</button>
                </form>
            </div>
        );
    }
}



export default imgUpload;