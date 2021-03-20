import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";


const TileHeader = styled.div`
    background-image: linear-gradient(#3a363238, #cca9001f);
    
`
export default TileHeader;


const H3 = styled.h3`
text-align:left;
padding-top: 4px;
padding-bottom: 4px;
padding-left: 20px;
`
export {H3};


const Tile  = styled.div`
overflow: hidden;
height:100%;
border-radius: 0;
border: 1px solid hsl(47deg 99% 39% / 67%);
color: #fff;
background-color: rgb(0 0 0 / 55%) !important;

-webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);

/* background:
radial-gradient(black 15%, transparent 16%) 0 0,
radial-gradient(black 15%, transparent 16%) 8px 8px,
radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
background-color:#282828;
background-size:16px 16px; */

`
export {Tile}



const TileButton = styled.a`
background-color: #996a008a;

    color: #fff;
    white-space: nowrap;
    border-width: 0px;

    padding-left: 30px;
    padding-right: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
		border-radius: 0;
		background-image: none;
		padding-top:2px;
		padding-bottom:5px;


  overflow: hidden;
  position: relative;

  span {
    z-index: 20;
  }
  

    clip-path: polygon(0 0, 89% 0, 100% 61%, 100% 100%, 10% 100%, 0 42%);

&:after{
  background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
}

&:hover{
  text-decoration: none;
    color:#fffa63;;

  &:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);

  }
}`

export {TileButton}


const Background = styled.div`
  content: "";
  left: 0;
  right: 0;
  z-index: 1;
  
  display: block;
  background-color:black;
  background-image: url('./images/city.jpg');  background-repeat: no-repeat; background-size: cover;  
  height: 100%;
  background-attachment: fixed;
  

&:before {

}`
export {Background}

const FloatingCubes = styled.div `
    position: absolute;
    background: #ff000000;
    width: 100%;


	height: 100vh;

&:before {
	z-index: -1;
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 60vh;
}
&:after {
	z-index: -1;
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 20vh;
}
 
`
export {FloatingCubes}