import React from "react";
import "./subContainer.css";

function SubContainer(props) {
    return (
        <div className="container-fluid border-top subContainer">{props.children}</div>
    );
}

export default SubContainer;