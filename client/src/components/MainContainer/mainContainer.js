import React from "react";
import "./mainContainer.css";

function MainContainer({ children }) {
    return (
        <div className="container-fluid">{children}</div>
    );
}

export default MainContainer;