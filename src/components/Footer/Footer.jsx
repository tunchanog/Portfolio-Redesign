import * as React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import "./Footer.scss";

export class Footer extends React.Component {
    render() {
        return ( 
            <section className="footer">
            <FontAwesomeIcon size="3x" icon={["fas", "envelope"]} />
            <h2>Contact</h2>
            <p className="mail_me">tunchanog@gmail.com</p>
                <a target="_blank" href="https://github.com/tunchanog">
                <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/tunchanog-powers/">
                <FontAwesomeIcon size="2x" icon={["fab", "linkedin-in"]} />
                 </a>
                <a target="_blank" href="https://www.pinterest.com/tunchanogpowers/" > 
                <FontAwesomeIcon size="2x" icon={["fab", "pinterest"]} />
                </a>
            <p>&#169;2018 Tunchanog Powers</p>
            </section>
        );
    }
}