import React from 'react'
import {findDOMNode} from 'react-dom'
import {PageHeader, Grid, Col, Row, Image, FormGroup, FormControl, InputGroup, Button, ControlLabel, Form} from 'react-bootstrap';
import PropTypes from 'prop-types';


const style = {
  position: 'absolute',
  zIndex: 1,
  padding:'30px',
  color: 'white',
  textAlign: 'center',
  width: '60%',
  marginLeft: '20%',
  top: '15%'
}


const styleIcon = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  filter: 'brightness(0) invert(1)'
}

const scrollOffset = 50

export class VideoOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scrollToRepair() {
    window.scroll({
      top: this.props.scrollRef.repairRef.offsetTop - scrollOffset,
      behavior: 'smooth'
    });
  }


  render() {
    return (
      <div className='overlay' style={style}>
        <h2>Harvard Auto Schools</h2>
        <hr className="intro-divider" style={{display: 'block'}}/>
        <Button bsStyle="danger" onClick={this.scrollToRepair.bind(this)}>Know More</Button>
      </div>
    )
  }
}

VideoOverlay.propTypes = {
  scrollRef: PropTypes.object,
}

export default VideoOverlay

/*  save this for future dev
          <FormGroup>
            <InputGroup>
              <FormControl placeholder="zach@gmail.com" type="text" />
              <InputGroup.Button>
                <Button bsStyle="danger">Request a quote</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
          <div style={styleIcon}>
            <Row>
              <Col xs={4} md={4}>
                <div>
                  <Image className="VideoOverlayIcon" src="static/img/repair.png" circle />
                  <p> repair </p>
                </div>  
              </Col>
              <Col xs={4} md={4}>
                <div>
                  <Image className="VideoOverlayIcon" src="static/img/rent.png" circle />
                  <p> Rent </p>
                </div>
              </Col>
              <Col xs={4} md={4}>
                <div>
                  <Image className="VideoOverlayIcon" src="static/img/used.png" circle />
                  <p> Sell </p>
                </div>
              </Col>
            </Row>
          </div>
*/