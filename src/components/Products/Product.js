import React, {useState} from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar  } from '@fortawesome/free-solid-svg-icons'
import {Switch, Route, Link, useParams} from 'react-router-dom';




const ImageRow = styled(Row)`

`

const ProdTitle = styled(Col)`

`

const ProdSubTitle = styled(Col)`
color:#a0a0a0;
font-size: 13px;
`

const ProdImage = styled.img`
  width: 150px;
  height: 150px;
  
`;


const ProductContainer = styled(Container)`
display:inline-block;
box-shadow: 4px 9px 8px 0px rgb(0 0 0 / 5%);
margin-bottom:15px;
cursor: pointer;
max-width: ${(props) => props.width}px;
transition: transform .2s; /* Animation */
  &:hover{
    transform: scale(${(props) => props.
// @ts-ignore
    prodZoomState}); 
  }
`



function Product(props) {
  const [NameState, setNameState] = useState('Default')
  console.log(props)


  //var name = props.prodName;
  const name = 'John Doe'
         
    return (
      <Link to={`/ProductPage/${props.prodName}/${props.prodSubTitle}`}>
        <ProductContainer width={props.prodWidthState} prodZoomState={props.prodZoomState}>
          <Row>
            <Col>
              <ProdImage
                // @ts-ignore
                
                src={props.productImage}
              ></ProdImage>
            </Col>
          </Row>
          <Row>
            <ProdTitle>
              {props.prodName} <FontAwesomeIcon icon={faStar} />
            </ProdTitle>
          </Row>
          <Row>
            <ProdSubTitle>
              {props.prodWidthState}, {props.prodSubTitle}
            </ProdSubTitle>
          </Row>
          <Row>
            <Col>{/* <input type="text" placeholder="Update Name" onChange={(event) => props.onChange(event.target.value)} /> */}</Col>
          </Row>
        </ProductContainer>
      </Link>
    );
}

export default Product;