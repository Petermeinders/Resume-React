import React, {useState} from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar  } from '@fortawesome/free-solid-svg-icons'
import {Switch, Route, Link, useParams} from 'react-router-dom';




const RowStyle = styled(Row)`


`


export function DynamicRow(props) {
    var val = props.classes;
//   const [NameState, setNameState] = useState('Default')
//   console.log(props)


  //var name = props.prodName;
  const name = 'John Doe'
         
    return (
      <Row>
        <Col>
          <div>{props.children}</div>
        </Col>
      </Row>
    );
}
