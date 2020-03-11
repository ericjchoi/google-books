// Importing components
import React from "react";
import Nav from "../components/Nav/nav.js";
import MainContainer from "../components/MainContainer/mainContainer.js";

// function for rendering when there is no matching search results e.g. due to the meaningless search word input
function NoMatch() {
  return (
    <MainContainer fluid>
      <Nav /><br /><br /><br /><br /><br /><br />
      <h1 style={{ textAlign: "center" }}>Your search did not match any book results.</h1>
      <h1 style={{ textAlign: "center" }}><span role="img" aria-label="Face With Rolling Eyes Emoji" style={{ fontSize: "25rem" }}>🙄</span></h1>
    </MainContainer>
  );
}

export default NoMatch;
