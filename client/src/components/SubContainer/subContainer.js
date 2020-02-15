import React from "react";

function SubContainer(props) {
    return (
        <div className="container-fluid border-top subContainer">{props.children}</div>
    );
}

export default SubContainer;