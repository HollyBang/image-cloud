import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";

import ImgUpload from '../../components/ImgUpload';
import ImgGallery from '../../components/ImgGallery';
import './MainContent.css';

const MainContent = (props) => {
    console.log(props.loadingFlag);
   const { loadingFlag } = props;
   const loadingClass = loadingFlag ? 'loading' : '';

    return (
        <div className={`main-content ${loadingClass}`}>
            <Switch>
                <Route exact path="/" component={ImgUpload} />
                <Route path="/gallery" component={ImgGallery} />
            </Switch>
        </div>
    );
};

const mapStateToProps = state => ({
    loadingFlag: state.imgUpload.isFetching
}) 

export default withRouter(connect(mapStateToProps)(MainContent));