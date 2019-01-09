import * as React from "react";

import "./Header.scss";

export class Header extends React.Component {
    render() {
        return ( 
            <section className="header" >
                <div className="avatar"></div>
                <h1>Camellia Powers</h1>
                <h2>UI / UX Designer</h2>
                <h3>Seattle, WA</h3>
                <div className="intro">
                    <p>Hi, I'm Camellia Powers. I'm a designer based in Seattle, WA. I'm always interested in new technology, design
                    trends, animation, color, space, and new ways to build engaging web and mobile products. For over 7 years,
                    I've been a Graphic, Web and UI - UX designer, working on projects of many shapes and sizes, turning
                    ideas into exceptional online experiences.</p>
                    <button className="secondary_btn"><a href="/images/camelliapowers_resume.pdf" target="blank">Résumé</a></button> 
                    {/* <button className="secondary_btn">Bio</button>  */}
                </div>
            </section>
        );
    }

}