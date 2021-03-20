import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar  } from '@fortawesome/free-solid-svg-icons'





const size = {
    xs: '320px',
    sm: '768px',
    lg: '1200px',
   }

   const device = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    lg: `(min-width: ${size.lg})`
   }

export default {size, device}