// import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import "./styles.css";
import { Container } from "semantic-ui-react";
import HomePage from "./HomePage";
// import { InfoItemData } from "../models/InfoItemData";
// import FetchCourseInfo from "../api/FetchCourseInfo";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container style={{ marginTop: "6em" }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
