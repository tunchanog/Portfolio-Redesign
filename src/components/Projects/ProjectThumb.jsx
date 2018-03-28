import * as React from "react";
import { Link } from "react-router-dom";
 
import "./Projects.scss";

export class ProjectThumb extends React.Component {
    render() {
        return (
            <Link to={`projects/${this.props.name}`}>
                <article className="item">
                    <div className="thumb" style={{backgroundImage: `url(/images/projects/${this.props.name}/thumb.jpg)`}}></div>
                    <div className="label">{this.props.title}</div>
                </article>
            </Link>
        );
    }

}