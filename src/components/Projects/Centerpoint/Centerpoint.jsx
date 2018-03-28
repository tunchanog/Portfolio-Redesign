import * as React from "react";
 
import "../Projects.scss";

export class Centerpoint extends React.Component {
    render() {
        return (
            <div className="project-detail-container">
                <h2>CATS CenterPoint</h2> 
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
                            <p>Web Application </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Tools</div>
                        <div className="detail-content">
                            <p>Photoshop, Illustrator, A lot of paper and pencils</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Duties</div>
                        <div className="detail-content">
                            <p>Visual Design, Interactive Design, UI/UX Design</p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">About App</div>
                        <div className="detail-content">
                            <p>CATS CenterPoint (Asset Lifecycle Management) is a secure way to store physical asset data centrally,
                                so users can manage, locate and monitor it continuously. It can produce reports, make custom
                                queries, and share asset data to back office systems which is available as a SaaS or on premises
                                solution.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Goal</div>
                        <div className="detail-content">
                            <p>To improve existing product that is still running on Flex, replacing it with HTML technology
                                and expanding the application’s abilities by adding new modules such as Planning, Requisitions,
                                Inventory, Audits, Reconciler, Query Builder and Reports.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Process</div>
                        <div className="detail-content">
                            <p>
                                I reimagined the user experience as part of a rewrite of the existing product. I was part of the migration from the old product
                                in Flex to the new HTML application (Single-page Application). I worked alongside the development
                                team during the redesign and also helped maintain the user interface for the legacy Flex
                                product. In addition, I collaborated with marketing team to rebrand the look and feel of
                                the product and provided design work such as logo design.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-detail">
                    <div className="detail-row">
                        <div className="detail-title">Mockup</div>
                        <div className="detail-content"></div>
                    </div>
                    <img className="detail_image" src="../images/projects/centerpoint/centerpoint2.jpg" />
                    <img className="detail_image" src="../images/projects/centerpoint/centerpoint3.jpg" />
                    <img className="detail_image" src="../images/projects/centerpoint/centerpoint4.jpg" />
                </div>

            </div>
        );
    }

}