import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar  } from '@fortawesome/free-solid-svg-icons'
import {Switch, Route, Link, useParams} from 'react-router-dom';
import TileHeader, {H3, Tile, TileButton} from './Fundamentals/Animation'
import Particles from 'react-particles-js'; 



import '.././css/app.css';
import '.././css/app-old.css';
import '.././css/custom.css';
import '.././css/bootstrap/bootstrap.min.css';
import ParticleOrb from './Fundamentals/ParticleOrb';


const EmptyOrbSpaceMobile = styled.div`
@media only screen and (max-width: 768px) {
  height: 117px;
  margin-bottom: 58px;;
}
`



const Number20 = styled.h1`

@media only screen and (max-width: 768px) {
  position: relative;
  top:80px;
  left:0px;
  height:0px
  }

  @media only screen and (min-width: 768px) and (max-width: 1239px)  {
  position: absolute;
  top:33px;
  left:74px;
  }
  @media only screen and (min-width: 1239px) and (max-width: 1500px)  {
  position: absolute;
  top:33px;
  left:51px;
  }
  @media only screen and (min-width: 1500px) and (max-width: 2800px)  {
  position: absolute;
  top:33px;
  left:51px;
  }

/* @media only screen and (max-width: 768px) {
position: relative;
height:0px;
top:79px;
left:0px;
} */
`;

const TileDetailsButton = styled(TileButton)`
top:12px;
right:10px;
float:right;
`

const breatheAnimation = keyframes `
0% {
  background-position: -50% 0px;
}

15% {
color: white;

}

80% {
    /* background-position: left; */
    background-position: -50% 0px;
   
  }
  100% {
    /* background-position: bottom right; */
    background-position: 150% 0px;
  }
`

const ShimmerText = styled(Tile)`
  text-shadow: -1px -1px 2px #0c0a05;
  color: rgba(255, 255, 255, 0.6);
  background: -webkit-gradient(linear, left top, right top, from(#00000000), to(#00000000), color-stop(0.5, #7965004f));
  background: -moz-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.9, #ecc813));
  background: gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.9, #ecc813));
  -webkit-background-size: 125px 100%;
  -moz-background-size: 125px 100%;
  background-size: 125px 100%;

  -webkit-animation-name: shimmer;
  -moz-animation-name: shimmer;
  animation-name: shimmer;
  -webkit-animation-duration: 2s;
  -moz-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #222;

  animation-name: ${breatheAnimation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

const ShimmerTextTile1 = styled(ShimmerText)`
animation-duration: 10s;
`

const ShimmerTextTile2 = styled(ShimmerText)`
animation-duration: 16s;
`

const ShimmerTextTile3 = styled(ShimmerText)`
animation-duration: 20s;
`

const ShimmerTextTile4 = styled(ShimmerText)`
animation-duration: 13s;
`


const FirstRow = styled(Row)`

`

const SecondRow = styled(Row)`

`

const FirstCol = styled(Col)`

`

const SecondCol = styled(Col)`

`

const HomeScreen = styled.div`

`

const Lines = styled.div`


`


const ParticlesStyle = styled(Particles)`
position:absolute;
width:100%;

`


const Homescreen = () => {

  
  var data = {
    particles: {
      number: {
      value: 30,
      density: {
      enable: true,
      value_area: 700
            }
          },
      color: {
      value: "#7945004f"
          },
      shape: {
      type: "circle",
      stroke: {
      width: 0,
      color: "#000000"
            },
      polygon: {
      nb_sides: 5
            },
          },
      opacity: {
      value: 0.5,
      random: false,
      anim: {
      enable: false,
      speed: 0.1,
      opacity_min: 0.1,
      sync: false
            }
          },
      size: {
      value: 3,
      random: true,
      anim: {
      enable: false,
      speed: 10,
      size_min: 0.1,
      sync: false
            }
          },
      line_linked: {
      enable: true,
      distance: 150,
      color: "#7965004f",
      opacity: 0.4,
      width: 1
          },
      move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
      enable: false,
      rotateX: 600,
      rotateY: 1200
            }
          }
        },
      interactivity: {
      detect_on: "canvas",
      events: {
      onhover: {
      enable: true,
      mode: "grab"
            },
      onclick: {
      enable: true,
      mode: "push"
            },
      resize: true
          },
      modes: {
      grab: {
      distance: 140,
      line_linked: {
      opacity: 1
              }
            },
      bubble: {
      distance: 400,
      size: 40,
      duration: 2,
      opacity: 8,
      speed: 3
            },
      repulse: {
      distance: 200,
      duration: 0.4
            },
      push: {
      particles_nb: 4
            },
      remove: {
      particles_nb: 2
            }
          }
        },
      retina_detect: true
  }


      return (
        <HomeScreen className="HomeScreen">
          <Lines className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </Lines>
          {/* FIRST MAIN ROW */}
          <FirstRow className="row">
            <FirstCol className="col-12 col-xl-6">
              <ShimmerTextTile1 className="Tile">
              <ParticlesStyle params={data} />

                <TileHeader>
                <H3>Overview</H3>
                </TileHeader>
                <div className="card-body">
                  <div id="redeem-code-form">
                    <p>
                      Full-Stack Developer and IT Specialist with a passion for problem solving, learning, and team building. Self-motivated goal-oriented with the desire to contribute both to a team
                      and the development process
                    </p>
                    <div>
                      <TileButton href="https://github.com/warchaser9/Resume">GitHub Page</TileButton>
                    </div>
                  </div>
                </div>
              </ShimmerTextTile1>
            </FirstCol>
            <SecondCol className="col-12 col-xl-6">
              <ShimmerTextTile2>
              <ParticlesStyle params={data} />

                <TileHeader >
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <H3>Knowledge</H3>
                    </div>
                    <div className="col-12 col-md-6">
                      <TileDetailsButton href="/knowledge" className="">
                        Details 
                      </TileDetailsButton>
                    </div>
                  </div>
                </TileHeader>
                <div className="card-body">
                  <div>
                    <div id="balance-overview-placeholder" className="hide balance-content-placeholder">
                      <div>
                        <div className="placeholder-content animated-background" />
                      </div>
                    </div>
                    <div>
                      <p>
                        - Development Language Agnostic
                      </p>
                      {/* <p>C# (Winforms, Webforms, MVC and WPF), Java, VBA, SQL, Angular, Typescript, LINQ, ASP.NET, Entity Framework, XAML, HTML, CSS, JSON, XML</p> */}
                      <p>
                        - Diverse Experience in many software tools
                      </p>
                      {/* <p>Visual Studio 2013/2016/2019, cPanel, Vmware/Virtualbox/Parallels, Filezilla, Sublime Text, VS Code, Putty, Unity, SSRS 2005, ServiceNow, Kentico</p> */}
                      <p>
                        - Extensive Wordpress experience
                      </p>
                      <p>
                        - Experienced in PC and network security administration
                      </p>
                      <div />
                    </div>
                  </div>
                </div>
              </ShimmerTextTile2>
            </SecondCol>
          </FirstRow>
          {/* SECOND MAIN ROW */}
          <SecondRow className="row main-row">
            <FirstCol className="info-card col-12 col-xl-6">
              <ShimmerTextTile3>
              <ParticlesStyle params={data} />

                <TileHeader>
                  <div className="row">
                    <div className="col-12 col-md-8 col-lg-7">
                      <H3>My Information</H3>
                    </div>
                    <div className="col-12 col-md-4 col-lg-5" />
                  </div>
                </TileHeader>
                {/**/}
                <div className="card-body card-body-margin ">
                  <div>
                    <div className="row">
                      <div className="label col-12 col-md-4">Name</div>
                      <div className="col-12 col-md-8">Peter Meinders</div>
                    </div>
                    <div className="row mt-3 mt-md-3">
                      <div className="label col-12 col-md-4">Location</div>
                      <div className="col-12 col-md-8">
                        <span>Georgia</span>
                      </div>
                    </div>
                    <div className="row mt-3 mt-md-3">
                      <div className="label col-12 col-md-4">GitHub</div>
                      <div className="col-12 col-md-8 text-truncate">
                        <a style={{ padding: "0px" }} href="https://github.com/warchaser9/Resume">
                          Warchaser9
                        </a>
                      </div>
                    </div>
                    <div className="row mt-3 mt-md-3">
                      <div className="label col-12 col-md-4">Phone</div>
                      <div className="col-12 col-md-8">
                        <span>(***) ***-****</span>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
              </ShimmerTextTile3>
            </FirstCol>
            <SecondCol className="exp-card col-12 col-xl-6">
              <ShimmerTextTile4>
                
                <TileHeader className="card-title">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <H3>Experience</H3>
                    </div>
                    <div className="col-12 col-md-6">
                      <TileDetailsButton href="/experience" className="">
                        Details
                      </TileDetailsButton>
                    </div>
                  </div>
                </TileHeader>
                {/**/}
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 col-sm-12 text-center">
                      <span className="align-middle">
                        {" "}
                        <Number20>20+</Number20>
                        <ParticleOrb></ParticleOrb>
                        <EmptyOrbSpaceMobile></EmptyOrbSpaceMobile> 
                      </span>
                    </div>
                    <div className="col-md-8 col-sm-12 text-align-center">
                      <div>
                        <h5 className="green-color">20+ Languages/Libraries/Markups</h5>
                        <h5 className="green-color">20+ Client's System Administrator</h5>
                        {/* <p>C# (Winforms, Webforms, MVC and WPF), Java, VBA, SQL, Angular, Typescript, LINQ, ASP.NET, Entity Framework, XAML, HTML, CSS, JSON, XML</p> */}
                        <h5 className="green-color">20+ Wordpress sites created and supported</h5>
                        {/* <p>Visual Studio 2013/2016/2019, cPanel, Vmware/Virtualbox/Parallels, Filezilla, Sublime Text, VS Code, Putty, Unity, SSRS 2005, ServiceNow, Kentico</p> */}
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              </ShimmerTextTile4>
            </SecondCol>
          </SecondRow>
          <link href="../css/custom.css" rel="stylesheet" />
        </HomeScreen>
      );
    
};



export default Homescreen;