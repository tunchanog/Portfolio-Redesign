import * as React from "react";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

import{Projects} from "./Projects/Projects"
import {ProjectView} from "./Projects/ProjectView"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../style.scss"

export class Root extends React.Component {

    render() {
        return (
            <Router>
                <div id="container" className="container">
                    <Route exact path="/" component={Projects} />
                    <Route path="/projects" component={ProjectView} />
                </div>
            </Router>
        );
    }
}