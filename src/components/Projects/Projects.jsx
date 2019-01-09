import * as React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import {ProjectThumb} from "./ProjectThumb";
import {ProjectNext} from "./ProjectNext";
import {Footer} from "../Footer/Footer"
import {Header} from "../Header/Header"
 
import "./Projects.scss";

export class Projects extends React.Component {
    componentDidMount() {
        document.getElementById("container").scrollTop = 0;
    }
    render() {
        return ( 
            <div>
                <Header />
                <section className="content_container"> 
                <Link to="/">
                    <FontAwesomeIcon size="2x" icon={["fas", "th"]} />
                </Link>
                <header>
                    <h2>Work</h2>
                </header>
                <div className="row">
                    <ProjectThumb title="UI/UX Design, Prototype" name="portofseattle"/>
                    <ProjectThumb title="Visual/UI/UX Design" name="centerpoint"/>
                    <ProjectThumb title="UI/UX Design, Prototype" name="mobility"/>
                    <ProjectThumb title="UI/UX Design, HTML/CSS/ReactJS" name="alaska"/>
                    <ProjectThumb title="UI Design, Prototype" name="hbw"/>
                    <ProjectThumb title="UI Design, HTML/CSS/jQuery" name="metro"/>
                    <ProjectThumb title="Web Design" name="archaio"/>
                    <ProjectNext />
                    <ProjectNext />
                </div>
                </section>
                <Footer />
            </div>
        );
    }
}