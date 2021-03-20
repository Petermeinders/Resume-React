import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import {Container, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar  } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";
import {DynamicRow} from '.././components/DynamicRow'
import { Select } from 'react-functional-select';



const Header = styled.h1`
text-align:left;
`


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: 'black',
            backgroundColor: 'grey',
            height: .1
        }}
    />
);

const MultiImageRow = styled(Row)`
margin-top: 15px;
`

const GridPic = styled(Col)`
 margin-right: 20px;
 cursor: pointer;

`




const _cityOptions = [
  { id: 1, city: 'Austin', state: 'TX' },
  { id: 2, city: 'Denver', state: 'CO' },
  { id: 3, city: 'Chicago', state: 'IL' },
  { id: 4, city: 'Phoenix', state: 'AZ' },
  { id: 5, city: 'Houston', state: 'TX' }
];



const ProductPage = () => {

    // @ts-ignore
    const {title,subtitle} = useParams();
     // @ts-ignore
    //  const {subtitle}= useParams()

    const [isInvalid, setIsInvalid] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isClearable, setIsClearable] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);

    const getOptionValue = useCallback((option) => option.id, []);
    const onOptionChange = useCallback((option) => setSelectedOption(option), []);
    const getOptionLabel = useCallback((option) => `${option.city}, ${option.state}`, []);


    return (
      <div>
        <Container style={{ maxWidth: "1140px", marginLeft: "auto", marginRight: "auto", padding: "15px" }}>
          <Row>
            <Col xs={6}>
              <Header>{title}</Header>
              <h4>{subtitle}</h4>
              <ColoredLine color="black" />
              <MultiImageRow>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
              </MultiImageRow>
              <MultiImageRow>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
                <GridPic xs={1}>
                  <img src="https://source.unsplash.com/collection/190727/50x50" />
                </GridPic>
              </MultiImageRow>
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <Button variant="primary" style={{ marginRight: "10px" }}>
                    Order
                  </Button>
                  {""}
                  <Button variant="outline-primary">Save</Button>{" "}
                </Col>
               
              </Row>
              <Row style={{ marginTop: "10px" }}>
              <Col xs={6}>
                  <Select
                    isInvalid={isInvalid}
                    options={_cityOptions}
                    isDisabled={isDisabled}
                    isClearable={isClearable}
                    onOptionChange={onOptionChange}
                    getOptionValue={getOptionValue}
                    getOptionLabel={getOptionLabel}
                    placeholder="Select a location"
                  />
                </Col>
              </Row>
              <ColoredLine color="black" />
              <Row>
                <Col>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <img src="https://source.unsplash.com/collection/190727/400x400" />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default ProductPage;
