import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import imgUpload from '../../actions/imgUpload';



class ImgUpload extends Component {
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
        data.append('filename', event.target.files[0].name);

        console.log(event.target.files);
        this.setState({
            formData: data
        });
        // event.target.value = null;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state.formData;
        this.props.imgUpload(data);
        // this.input.value = null;
    }
    render() {
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

const mapDispatchToProps = dispatch => bindActionCreators({
    imgUpload,
  }, dispatch);

export default connect(null, mapDispatchToProps)(ImgUpload);

// ref={(input) => this.input = input}