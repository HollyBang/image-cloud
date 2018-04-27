import React from 'react';
import { Route, Switch } from "react-router-dom";

import ImgUpload from '../../components/ImgUpload';
import ImgGallery from '../../components/ImgGallery';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <Switch>
                <Route exact path="/" component={ImgUpload} />
                <Route path="/gallery" component={ImgGallery} />
            </Switch>
        </div>
    );
};

export default MainContent;