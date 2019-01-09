import * as React from "react";
 
import "../Projects.scss";

export class Portofseattle extends React.Component {
    render() {
        return (
            <div className="project-detail-container">
                     <h2>Sea-Tac Airport - Parking Resevation</h2>
                     <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Client</div>
                        <div className="detail-content">
                            <p>Sea-Tac Airport  (Personal Project)</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Platform</div>
                        <div className="detail-content">
                            <p>Mobile App</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Tools</div>
                        <div className="detail-content">
                            <p>Sketch, Photoshop
                                {/* , InVision  */}
                                &nbsp;&nbsp;<a className="primary_btn" href="/images/projects/portofseattle/Sea-Tac_Parking_Reservation.pdf" target="blank">Stories</a>
                                {/* <a className="primary_btn" href="../images/projects/" target="_blank">Design</a> */}
                                {/* <a className="primary_btn" href="../images/projects/" target="_blank">Prototype</a> */}
                        </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Duties</div>
                        <div className="detail-content">
                            <p>Visual Design, UI/UX Design, Prototype</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">About App</div>
                        <div className="detail-content">
                        <p>Sea-Tac Airport Reserve parking spot on demand</p>
                        </div>
                    </div>
                </div>
                {/* <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Goal</div>
                        <div className="detail-content">
                            <p>To provide an alternative channel for users to access CATS services, improving user experience
                                over the old Windows Mobile product, and giving them more control in the field.</p>
                        </div>
                    </div>
                </div> */}
                <div className="project-detail">
                    <div className="detail-row">
                    <div className="detail-title"><p></p></div>
                        <div className="detail-content"></div>
                    </div>
                    <img className="detail_image" src="../images/projects/portofseattle/parking_user.jpg" />
                    <img className="detail_image" src="../images/projects/portofseattle/sea-tac_parking.jpg" />
                </div>
            </div>

        );
    }

}