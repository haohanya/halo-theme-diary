import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Layout from "../layout";

const Home = React.lazy(() => import('../pages/home'))
const Post = React.lazy(() => import('../pages/post'))
const Sheet = React.lazy(() => import('../pages/sheet'))
const Links = React.lazy(() => import('../pages/links'))
const Search = React.lazy(() => import('../pages/search'))

const DiaRouter = () => {
    return (
        <Switch>
            <Route path="/">
                <Layout>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home/:page" component={Home}/>
                    <Route exact path="/:category/:slug/:page" component={Home}/>
                    <Route exact path="/links" component={Links}/>
                    <Route exact path="/post/:id" component={Post}/>
                    <Route exact path="/sheet/:slug" component={Sheet}/>
                    <Route exact path="/search/" component={Search} />
                    <Route exact path="/search/:keyword" component={Search} />
                </Layout>
            </Route>
        </Switch>
    );
};

export default DiaRouter;
