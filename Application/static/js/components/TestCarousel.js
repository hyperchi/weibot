import React from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-bootstrap';


export class TestCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.refs.carousel)
    this.props.passRefToState(this.refs.carouselRef)
  }

  render() {
    return (
      <div ref="carouselRef" style={{clear:"both"}}>
        <Carousel activeIndex={this.props.offset.index} direction={this.props.offset.direction} onSelect={this.props.handleSelect}>
            <Carousel.Item>
              <img width={2000} height={401} alt="900x500" src="static/img/carousel1.jpg"/>
              <Carousel.Caption>
                <h3>We specialized in auto repair</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={2000} height={401} alt="900x500" src="static/img/carousel2.jpg"/>
              <Carousel.Caption>
                <h3>Master Wang has been engaged in auto repair since 1984.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={2000} height={401} alt="900x500" src="static/img/carousel3.jpg"/>
              <Carousel.Caption>
                <h3>Master Su has 21 years car repair experience.</h3>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

TestCarousel.propTypes = {
  offset: PropTypes.shape({
    index: PropTypes.number.isRequired,
    direction: PropTypes.string.isRequired
  }).isRequired,
  handleSelect: PropTypes.func.isRequired,
  passRefToState: PropTypes.func.isRequired
}


export default TestCarousel