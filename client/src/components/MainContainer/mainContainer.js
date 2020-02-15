import React from "react";

function MainContainer({ children }) {
    return (
        <div className="container-fluid">{children}</div>
    );
}

export default MainContainer;