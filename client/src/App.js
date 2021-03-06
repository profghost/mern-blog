import React, {lazy, Suspense} from 'react';
import './App.scss';
import Navbar from "./components/Layouts/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GlobalState from "./context/GlobalState";
import HomePage from "./components/Pages/HomePage";

const CategoryListPage = lazy(() => import("./components/Pages/CategoryListPage"));
const CategoryPostPage = lazy (() => import("./components/Pages/CategoryPostPage"));
const CreatePostPage  =  lazy(() => import("./components/Pages/CreatePostPage"));
const TagPostPage = lazy(() => import("./components/Pages/TagPostPage"));
const RecentPage = lazy(() => import('./components/Pages/RecentPage'));
const PostPage = lazy(() => import("./components/Pages/PostPage"));


function App() {
    return (
        <>
            <GlobalState>
                <Router>
                    <Navbar/>

                    <Switch>
                        <Suspense  fallback={<div className='d-flex justify-content-center'> <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div></div>}>
                            <Route exact path='/'><HomePage/> </Route>
                            <Route exact path='/recent'><RecentPage/> </Route>
                            <Route exact path='/categories'><CategoryListPage/> </Route>
                            <Route exact path='/category/:name'><CategoryPostPage/> </Route>
                            <Route exact path='/tag/:name'><TagPostPage/> </Route>
                            <Route exact path='/post/:slug'><PostPage/> </Route>

                            <Route exact path='/admin/create-post'><CreatePostPage/></Route>
                        </Suspense>
                    </Switch>

                </Router>
            </GlobalState>
        </>
    );
}

export default App;
