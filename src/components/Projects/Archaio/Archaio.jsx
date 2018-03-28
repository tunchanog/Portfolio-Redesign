import * as React from "react";
 
import "../Projects.scss";

export class Archaio extends React.Component {
    render() {
        return (
            <div className="project-detail-container">
                <h2>Archaio</h2>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Client</div>
                        <div className="detail-content">
                            <p>Archaio, LLC</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Platform</div>
                        <div className="detail-content">
                            <p>Web Design, Responsive Web Design</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Tools</div>
                        <div className="detail-content">
                            <p>Photoshop, Illustrator &nbsp; &nbsp; 
                            <a className="primary_btn" href="../images/projects/archaio/Archaio_full_view.html" target="_blank">Design</a>  
                                </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Duties</div>
                        <div className="detail-content">
                            <p>Web Design</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Mockup</div>
                        <div className="detail-content"></div>
                    </div>
                    <img className="detail_image" src="../images/projects/archaio/home1.jpg" />
                </div>
            </div>
        );
    }

}