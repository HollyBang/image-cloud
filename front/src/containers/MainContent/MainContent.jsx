import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ImgUpload from '../../components/ImgUpload';
import ImgGallery from '../../components/ImgGallery';
import Layout from './Layout';
import './MainContent.css';


const MainContent = (props) => {

    const { loadingFlag, location } = props;
    const loadingClass = loadingFlag ? 'loading' : '';

    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 1000, exit: 1000 };

    return (

        <Layout>
            <div className="perspective-wrapper">
                <TransitionGroup component="main" className="page-main">
                    <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
                        <div className={`main-content ${loadingClass}`}>
                            <Switch location={location}>
                                <Route exact path="/" component={ImgUpload} />
                                <Route path="/gallery" component={ImgGallery} />
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </Layout>

    );
};

const mapStateToProps = state => ({
    loadingFlag: state.imgUpload.isFetching,
})

export default withRouter(connect(mapStateToProps)(MainContent));