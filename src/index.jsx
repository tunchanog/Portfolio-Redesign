import * as React from "react";
import * as ReactDOM from "react-dom";
import "./icons";

React.PropTypes = require("prop-types");

var Preload = require('react-preload').Preload;


import "./style.scss"
import { Root } from "./components/Root";

var loadingIndicator = (<div id="preloader" className="ex ex--light"><div className="mnml-spinner light mx-auto"></div></div>);

var images = [
    "http://www.deelay.me/1000/http://www.deelay.me/img/5000ms.gif",

    "/images/projects/alaska/Alaska1.jpg",
    "/images/projects/alaska/Alaska3.jpg",
    "/images/projects/alaska/Landing.jpg",
    "/images/projects/alaska/Survey.jpg",
    "/images/projects/alaska/Thanks.jpg",

    "/images/projects/archaio/home1.jpg",
    "/images/projects/archaio/thumb.jpg",

    "/images/projects/centerpoint/thumb.jpg",
    "/images/projects/centerpoint/centerpoint2.jpg",
    "/images/projects/centerpoint/centerpoint3.jpg",
    "/images/projects/centerpoint/centerpoint4.jpg",

    "/images/projects/hbw/thumb.jpg",
    "/images/projects/hbw/HBW3.jpg",

    "/images/projects/metro/thumb.jpg",
    "/images/projects/metro/Metro_xmas1.jpg",

    "/images/projects/mobility/thumb.jpg",
    "/images/projects/mobility/mobility1.jpg",
    "/images/projects/mobility/Signin.jpg",
    "/images/projects/mobility/Connection_Mock.jpg",

    "/images/projects/portofseattle/thumb.jpg",
    "/images/projects/portofseattle/parking_user.jpg",
    "/images/projects/portofseattle/sea-tac_parking.jpg"
]

ReactDOM.render(
    <Preload
        loadingIndicator={loadingIndicator}
        images={images}
        autoResolveDelay={3000}
        resolveOnError={true}
        mountChildren={true}> 
        <Root />
    </Preload>,
    document.getElementById("main")
);