import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import {Switch, Route, Link} from 'react-router-dom';
import Home from "./Home";
import styled from "styled-components";
import './css/custom.css';
import { Background, FloatingCubes } from "components/Fundamentals/Animation";

const SiteContainer = styled.div`

`

function App() {
  let Site = "Resume";

  return (
    <SiteContainer>
      <Background>

        <FloatingCubes>
          <div className="squares">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
        </FloatingCubes>

        <Router>
          <div>
            <NavBar name={Site} />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/ProductsPage">
                <ProductsPage searchTermState={""} />
              </Route>
              <Route path="/ProductPage/:title/:subtitle" component={ProductPage} />
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </Background>
    </SiteContainer>
  );
}

export default App;
