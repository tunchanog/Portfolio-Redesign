import * as React from "react";
 
import "../Projects.scss";

export class Metro extends React.Component {
    render() {
        return (
            <div className="project-detail-container">
                 <h2>Metro Xmas E-card</h2>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Client</div>
                        <div className="detail-content">
                            <p>Metro Singapore Ltd.</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Platform</div>
                        <div className="detail-content">
                            <p>Web, Mobile Web</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Tools</div>
                        <div className="detail-content">
                            <p>Photoshop, Illustrator, Text Editor</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Duties</div>
                        <div className="detail-content">
                            <p> Web/UI Design, FrontEnd Dev [ &nbsp;HTML/CSS/Jquery &nbsp;] &nbsp;
                            <a className="primary_btn" href="../images/projects/metro/demo/home.html" target="_blank">Demo</a> 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                    <div className="detail-title"><p></p></div>
                        <div className="detail-content"></div>
                    </div>
                    <img className="detail_image" src="../images/projects/metro/Metro_xmas1.jpg" />
                </div>
            </div>
        );
    }

}