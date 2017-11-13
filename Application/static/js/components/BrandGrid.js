import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap';


const BrandGrid = () => (
  <div style={{ width: "100%"}}>
    <Grid >
      <Row className="show-grid" style={{height:"200px", padding: "10px"}}>

        <Col xs={6} md={3}>
          <img src="/static/img/brands/Jaguar.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="/static/img/brands/Lexus.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="/static/img/brands/Audi.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="/static/img/brands/Benz.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="/static/img/brands/Porsche.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="/static/img/brands/LandRover.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="/static/img/brands/Vw.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="/static/img/brands/Bmw.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default BrandGrid