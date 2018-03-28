import * as React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import {Footer} from "../Footer/Footer"
import {SubpageHeader} from "../SubpageHeader/SubpageHeader"

import {Centerpoint} from "./Centerpoint/Centerpoint";
import {Mobility} from "./Mobility/Mobility";
import {Alaska} from "./Alaska/Alaska";
import {HBW} from "./HBW/HBW";
import {Metro} from "./Metro/Metro";
import {Archaio} from "./Archaio/Archaio";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Projects.scss";

export class ProjectView extends React.Component {

    pages = [
        "centerpoint",
        "mobility",
        "alaska",
        "hbw",
        "metro",
        "archaio"
    ];

    getNextPage() {
        var url = window.location.href;
        var lastSlashIndex = url.lastIndexOf("/");
        var pageName = url.substr(lastSlashIndex + 1);
        var pageIndex = this.pages.indexOf(pageName);
        var nextPageIndex = pageIndex + 1;
        if (nextPageIndex > 5){
            nextPageIndex = 0;
        }
        return this.pages[nextPageIndex];
    }
    getPreviousPage() {
        var url = window.location.href;
        var lastSlashIndex = url.lastIndexOf("/");
        var pageName = url.substr(lastSlashIndex + 1);
        var pageIndex = this.pages.indexOf(pageName);
        var previousPageIndex = pageIndex - 1;
        if (previousPageIndex < 0){
            previousPageIndex = 5;
        }
        return this.pages[previousPageIndex];
    }

    componentDidMount() {
        document.getElementById("container").scrollTop = 0;
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            document.getElementById("container").scrollTop = 0;
        }
    }

    render() {
        let path = this.props.match.path;
        return (
            <div>
                <SubpageHeader />
                <div className="sub_nav">
                    <nav>
                        <Link to={`${path}/${this.getPreviousPage()}`}>
                            <FontAwesomeIcon size="2x" icon={["fas", "angle-left"]} />
                        </Link>
                        <Link to="/">
                            <FontAwesomeIcon size="2x" icon={["fas", "th"]} />
                        </Link>
                        <Link to={`${path}/${this.getNextPage()}`}>
                            <FontAwesomeIcon size="2x" icon={["fas", "angle-right"]} />
                        </Link>
                    </nav>
                </div>
                <Route path={`${path}/centerpoint`} component={Centerpoint} />
                <Route path={`${path}/mobility`} component={Mobility} />
                <Route path={`${path}/alaska`} component={Alaska} />
                <Route path={`${path}/hbw`} component={HBW} />
                <Route path={`${path}/metro`} component={Metro} />
                <Route path={`${path}/archaio`} component={Archaio} />
                <Footer />
            </div>
        );
    }

}