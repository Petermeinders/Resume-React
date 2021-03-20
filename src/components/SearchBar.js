import React, {useState} from 'react';
import styled from 'styled-components';
import {Alert, Button, FormText, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Filter} from './Products/Filters'


const SearchForm = styled.div`
    margin-left:auto;
    margin-right:auto;
    margin-top: 15px;
    width:400px;
    
`

const SearchInput = styled.input`
    margin-left:auto;
    margin-right:auto;
    width:400px;
`

export function SearchBar(props){
    const [show, setShow] = useState(true);



    return (
      <SearchForm>
        <SearchInput type="text" placeholder="Filter results by keyword" onChange={(event) => props.setSearchTerm(event.target.value)} />
      </SearchForm>
    );


}