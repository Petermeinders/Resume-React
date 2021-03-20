import {React, useState} from 'react';
import styled from 'styled-components';
import {Alert, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const FooterStyle = styled(Alert)`
position: fixed;
    bottom: 0px;
    width: 100%;
    z-index:10;
`;

const ButtonFooterStyle = styled(Button)`
position: fixed;
    bottom: 0px;
    width: 100%;
    z-index:10;
`;

export function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <FooterStyle show={show} variant="success">
          <Alert.Heading>Site under construction!</Alert.Heading>
          <p>
            This site is currently under construction. Please remember to wear
            your hard hat.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Got it!
            </Button>
          </div>
          </FooterStyle>

        {!show && (
          <ButtonFooterStyle variant="success" onClick={() => setShow(true)}>
            Show Alert
          </ButtonFooterStyle>
        )}
       
      </>
    );
  }