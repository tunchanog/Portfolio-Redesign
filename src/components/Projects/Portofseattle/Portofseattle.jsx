import * as React from "react";
 
import "../Projects.scss";

export class Portofseattle extends React.Component {
    render() {
        return (
            <div className="project-detail-container">
                     <h2>Sea-Tac Airport - Parking Reservation System</h2>
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
                            <p>Sketch, Photoshop&nbsp;&nbsp;
                                <a className="primary_btn" href="/images/projects/portofseattle/Sea-Tac_Parking_Reservation.pdf" target="blank">Stories</a>
                                <a className="primary_btn" href="../images/projects/portofseattle/portofseattle_full_view.html" target="_blank">Design</a>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Duties</div>
                        <div className="detail-content">
                            <p>Visual Design, UI/UX Design</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">About App</div>
                        <div className="detail-content">
                        <p>This app will give customers the ability to reserve parking spots that are close to their ticketing area, have spots assigned on-demand when they arrive at the Sea-Tac garage, and have easy access to their parking spot location.  It also automatically handles payment when the customer leaves the garage.</p>
                        
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Goal</div>
                        <div className="detail-content">
                            <p>To improve customer experience at Sea-Tac Airport parking.</p>
                        </div>
                    </div>
                </div>
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