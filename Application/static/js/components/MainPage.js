import React from 'react'
import ReactDOM from 'react-dom';
import BrandGrid from './BrandGrid'
import Carousel from '../containers/Carousel'
import RepairGrid from './RepairGrid'
import Video from './Video'
import VisibleMap from '../containers/VisibleMap'
import ImageGallery from'./ImageGallery'

const mapSettings = {
  initialCenter: {
    lat: 42.349379,
    lng: -71.049842
  },
  zoom: 13,
  draggable: true,
  zoomControl: true,
  scrollwheel: false,
}

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      mainRef: null,
      rentalCarRef: null,
      repairRef: null,
      mapRef: null,
    };
  }

  render() {
    return (
      <div>
        <Video mainPageRefs={ this.state }
               ref={ ref => !this.state.mainRef && this.setState({mainRef: ref})} />
        <div className="container">
          <RepairGrid />
        </div>
          <Carousel ref={ ref => !this.state.repairRef && this.setState({repairRef: ref})} />
        <div className="container">
          <VisibleMap mapSettings={mapSettings}
                      ref={ ref => !this.state.mapRef && this.setState({mapRef: ref})}>
          </VisibleMap>
          <BrandGrid />
        </div>
      </div>
    )
  }
}

export default MainPage