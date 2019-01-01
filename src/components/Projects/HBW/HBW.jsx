import * as React from "react";
 
import "../Projects.scss";

export class HBW extends React.Component {
    render() {
        return (
            <div className="project-detail-container">
               <h2>Hello Blue World</h2>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Client</div>
                        <div className="detail-content">
                            <p>Emirates Airlines</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Platform</div>
                        <div className="detail-content">
                            <p>Web, Mobile web</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Tools</div>
                        <div className="detail-content">
                            <p>Photoshop, Illustrator, Axure &nbsp; 
                               <a className="primary_btn" href="../images/projects/hbw/Prototype/Landing.html" target="_blank">Prototype</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Duties</div>
                        <div className="detail-content">
                            <p>Web/UI Design, Product Prototype, Interaction Design </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                    <div className="detail-title"><p></p></div>
                        <div className="detail-content"></div>
                    </div>
                    <img className="detail_image" src="../images/projects/hbw/HBW3.jpg" />
                </div>
            </div>
        );
    }

}