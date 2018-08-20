import * as React from "react";
import { Link } from "react-router-dom";

import "./SubpageHeader.scss";

export class SubpageHeader extends React.Component {
    render() {
        return ( 
            <section className="subpage_header" >
                <header>
                <Link to="/">
                    <div className="avatar"></div>
                    <div className="title">
                        <h1>Camellia Powers</h1>
                        <h2>Visual / UI / UX Designer</h2>
                    </div>
                </Link>
                <button className="secondary_btn"><a href="/images/camelliapowers_resume.pdf" target="blank">Résumé</a></button> 
                </header>
            </section>
        );
    }

}