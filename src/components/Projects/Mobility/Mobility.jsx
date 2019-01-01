import * as React from "react";
 
import "../Projects.scss";

export class Mobility extends React.Component {
    render() {
        return (
            <div className="project-detail-container">
                     <h2>CATS Mobility</h2>
                     <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Client</div>
                        <div className="detail-content">
                            <p>Fulcrum Technologies</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Platform</div>
                        <div className="detail-content">
                            <p>Native IOS Application (Iphone, Ipad)</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Tools</div>
                        <div className="detail-content">
                            <p>Photoshop, Illustrator, Axure &nbsp;&nbsp;
                                <a className="primary_btn" href="../images/projects/mobility/www/splash.html" target="_blank">Prototype</a>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Duties</div>
                        <div className="detail-content">
                            <p>Visual Design, UI Prototyping, Interactive Design, UI/UX Design</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">About App</div>
                        <div className="detail-content">
                            <p>CATS Mobility is a next-generation mobile application that helps users to verify and update physical
                                asset data directly from the field or the back office using smartphones and other handheld
                                devices. It allows them to use mobile devices for field updates, queries, warehouse and inventory
                                tasks.</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Goal</div>
                        <div className="detail-content">
                            <p>To provide an alternative channel for users to access CATS services, improving user experience
                                over the old Windows Mobile product, and giving them more control in the field.</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Process</div>
                        <div className="detail-content">
                            <p>I started this project by spending a lot of time learning about the product, interviewing the
                                product manager, development manager, developers and the CTO. In the process of interviewing
                                them, they helped me to create the product definitions and what exact tools could help our
                                users to complete thier tasks as fast as possible.
                            </p>
                            <p>
                                I created wireframes, mock-ups and product prototypes, and used Axure to present the ideas to my team. I created the overview
                                product and then broke it down feature by feature so that the developers could use it as
                                a reference.
                                </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                    <div className="detail-title"><p></p></div>
                        <div className="detail-content"></div>
                    </div>
                    <img className="detail_image" src="../images/projects/mobility/mobility1.jpg" />
                    <img className="detail_image" src="../images/projects/mobility/Connection_Mock.jpg" />
                    <img className="detail_image" src="../images/projects/mobility/Signin.jpg" />
                </div>
            </div>

        );
    }

}