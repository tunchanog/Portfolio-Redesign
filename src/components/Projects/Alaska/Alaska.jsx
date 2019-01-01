import * as React from "react";

import "../Projects.scss";

export class Alaska extends React.Component {
    render() {
        return (
            <div className="project-detail-container">
                <h2>Alaska - Customer Survey</h2>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Client</div>
                        <div className="detail-content">
                            <p>Alaska Airlines</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Platform</div>
                        <div className="detail-content">
                            <p>Kiosk, In-flight Entertainment System</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Tools</div>
                        <div className="detail-content">
                            <p>Photoshop, Illustrator, Pencils &amp; Paper, Visual Studio Code &nbsp; [ &nbsp;HTML, CSS, ReactJS&nbsp; ]    </p>
                            <p>
                            <a className="primary_btn" href="../images/projects/alaska/Alaska_full_view.html" target="_blank">Design</a>
                            <a className="primary_btn" href="../images/projects/alaska/www/index.html" target="_blank">Demo</a>
                            <a className="primary_btn" href="https://github.com/tunchanog/Alaska-ReactJS-App" target="_blank"> Source Code</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Duties</div>
                        <div className="detail-content">
                            <p>Visual Design, UI/UX Design, Front End Development</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title"><p></p></div>
                        <div className="detail-content"></div>
                    </div>
                    <img className="detail_image" src="../images/projects/alaska/Alaska3.jpg" />
                    <img className="detail_image" src="../images/projects/alaska/Alaska1.jpg" />
                </div>
            </div>
        );
    }

}