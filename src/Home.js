import React, { useState } from "react";
import "./App.css";
import * as Welcome from "./components/Welcome";
import Homescreen from "components/HomeScreen";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import CustomRow, { CustomCol } from "components/Fundamentals/CustomRow";

const Home = () => {
  let Site = "SiteName";

  return (
    <div>
      <Container>
        <CustomRow>
          <CustomCol>
            <Welcome.Welcome name={Site} />
          </CustomCol>
        </CustomRow>

        <div>
          <Row>
            <Col md={{ span: 11, offset: 1 }}>
              <Homescreen />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
