import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
import Product from  '../components/Products/Product';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Filter} from '../components/Products/Filters'
import * as SearchBar from ".././components/SearchBar";


// @ts-ignore
import Data from 'Products.json';

const ProductsContainer = styled(Container) `
margin-top:15px;
`

const FiltersColumn = styled(Col)`
// border-color: red;
// border-width: 1px;
// border-style: double;
max-width:300px;
`

const ProductCol = styled(Col)`
// border-color: red;
// border-width: 1px;
// border-style: double;
`

const ProductsPage = (props) =>{
  const [prodSubName, setProdSubName] = useState('Collection:Unsplash')
  const [prodWidthState, setProdWidthState] = useState('165')
  const [prodZoomState, setZoomState] = useState('1.05')


  //const [productImage, setProductImage] = useState('https://source.unsplash.com/random')

  //let productImage = 'https://source.unsplash.com/random'
  let productImage = 'https://source.unsplash.com/150x150/?hardwood,carpet,flooring'

  const newdata = Data.map((data => {
    console.log(data[0])
    return{
      

    }
  }))



  function handleZoomChange(value) {
    if(value != null && value !== "")
    {
      setZoomState(value);
    }
  }

  function handleNameChange(name) {
    if(name != null && name !== "")
    {
      setProdSubName(name);
    }
  }

  function handleWidthChange(width) {
    if(width != null && width !== "")
    {
      setProdWidthState(width);
    }
  }

   const [searchTermState, setSearchTermState] = useState('')

    function setSearchTermChange(value) {
      if(value != null)
      {
        setSearchTermState(value);
      }
    }



  let prods = Array.from(Array(10).keys());

    return (
      <div>
        <SearchBar.SearchBar searchTerm={searchTermState} setSearchTerm={(value) => setSearchTermChange(value)} />
        
        <ProductsContainer fluid>
          <Row>
            <FiltersColumn sm={4}>
              <Filter
                widthValue={prodWidthState}
                zoomLevel={prodZoomState}
                searchTerm={props.searchTermState}
                width={(value) => handleWidthChange(value)}
                name={(value) => handleNameChange(value)}
                setZoomLevel={(value) => handleZoomChange(value)}
              ></Filter>
            </FiltersColumn>
            <ProductCol sm={8}>
              {Data.map((item, index) => {
                if (item.name.toLowerCase().includes(props.searchTermState.toLowerCase()) || props.searchTermState == "") {
                  return <Product productImage={productImage} prodWidthState={prodWidthState} prodName={item.name} prodSubTitle={prodSubName} prodZoomState={prodZoomState}></Product>;
                }
              })}
            </ProductCol>
          </Row>
        </ProductsContainer>
      </div>
    );
}

export default ProductsPage;