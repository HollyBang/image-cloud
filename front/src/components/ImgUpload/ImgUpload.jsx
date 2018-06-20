import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import './ImgUpload.css';
import imgUpload from '../../actions/imgUpload';



class ImgUpload extends Component {
    constructor(props) {
        super(props);

        this.handleUploadFile = this.handleUploadFile.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }
        handleUploadFile(e) {
    
        const data = new FormData();
        data.append('selectedFile', e.target.files[0]);
        data.append('filename', e.target.files[0].name);

        this.props.imgUpload(data);
        e.target.value = null;
    }


    render() {

        const { loadingFlag } = this.props;
        const btnName = loadingFlag ? 'Loading' : 'Upload a file';

        return (
                <form className="upload-btn-wrapper">
                    {/* <button className="btn">Upload a file</button> */}
                    <label className="btn" htmlFor="inputFile">{ btnName }</label>
                    <input id="inputFile" type="file" name="selectedFile" onChange={this.handleUploadFile} disabled={loadingFlag}/>
                </form>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    imgUpload,
}, dispatch);

const mapStateToProps = state => ({
    loadingFlag: state.imgUpload.isFetching
});

export default connect(mapStateToProps, mapDispatchToProps)(ImgUpload);

// ref={(input) => this.input = input}
