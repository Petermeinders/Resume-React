import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {Container, Row, Col, Accordion, Card, AccordionContext} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar  } from '@fortawesome/free-solid-svg-icons'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import {Alert, Button, FormText, Form} from 'react-bootstrap'
import {createStore} from 'redux';


  <FontAwesomeIcon icon={faStar} />

  export function Filter(props, width){
    const [activeId, setActiveId] = useState("0");
    const [objectState, SetObjectState] = useState({count:4,theme:'blue'})

    const SearchForm = styled.div`
    margin-left:auto;
    margin-right:auto;
    width:200px;
`


    const count = objectState.count
    const theme = objectState.theme
    // const [parentValue, setParentValue] = useState(props)

    function IncreaseCount(){
      SetObjectState(prevState => {
        return {...prevState, count: prevState.count + 1}
      })
    }

    function toggleActive(id) {
      if (activeId === id) {
        setActiveId(null);
      } else {
        setActiveId(id);
      }
      IncreaseCount();
    }

    // function  onChangeColor(val) {
    //   console.log(val);
    // }

    return (
      <div className="App">
        <Accordion defaultActiveKey={activeId}>
          <div className={activeId === "0" ? "panel-wrap active-panel" : "panel-wrap"}>
            <div className="panel-header">
              <Accordion.Toggle onClick={() => toggleActive("0")} className="panel-toggle" eventKey="0">
                Product Display {count}
              </Accordion.Toggle>
            </div>

            <Accordion.Collapse eventKey="0">
              <div className="panel-body">
                <Row>
                  <Col xs="3">SubText:</Col>
                  <Col>
                    <input type="text" style={{ width: "100px", float: "left" }} placeholder="Sub Name" onChange={(event) => props.name(event.target.value)} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">Width:</Col>
                  <Col>
                    <input type="text" placeholder={props.widthValue} style={{ width: "100px", float: "left" }} onChange={(event) => props.width(event.target.value)} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">Zoom:</Col>
                  <Col>
                    <input type="text" placeholder={props.zoomLevel} style={{ width: "100px", float: "left" }} onChange={(event) => props.setZoomLevel(event.target.value)} />
                  </Col>
                </Row>
              </div>
            </Accordion.Collapse>
          </div>

          <div className={activeId === "1" ? "panel-wrap active-panel" : "panel-wrap"}>
            <div className="panel-header">
              <Accordion.Toggle onClick={() => toggleActive("1")} className="panel-toggle" eventKey="1">
                Filter Search
              </Accordion.Toggle>
            </div>

            <Accordion.Collapse eventKey="1">
              <div className="panel-body">
                {/* Body content for panel 2 */}
                <input type="text" placeholder="Filter results by keyword" onChange={(event) => props.setSearchTerm(event.target.value)} />
              </div>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </div>
    );
  }
      
    
  
 
