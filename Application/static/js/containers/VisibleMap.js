import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';
import Map from "../components/Map.js"
import Marker from "../components/Marker.js"
import GoogleApiWrapper from "../utils/GoogleApiComponent"
import { setRef } from '../actions'

// const mapStateToProps = (state, ownProps) => {
//   return {
//     // apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
//     google: ownProps.google,
//     zoom: ownProps.mapSettings.zoom,
//     draggable: ownProps.mapSettings.draggable,
//     scrollwheel: false,
//     initialCenter: ownProps.mapSettings.initialCenter
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       alert('asdfasdf');
//     }
//   }
// }

// const VisibleMap = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Map)

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
// })(VisibleMap)


const rightPaneStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#222",
  padding: "35px",
}

const colStyle = {
  padding: "0",
}

const tableStyle = {
  color: "rgb(230, 230, 230)",
}

const trStyle = {
  height: "30px",
}

const tdStyle = {
  verticalAlign: "top",
  minWidth: "75px",
}

export class MapContainer extends React.Component {
  componentDidUpdate() {
    this.props.passRefToState(this.refs.mapRef);
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    const style = {
      width: '100%',
      height: '40vh',
    }

    const onMarkClick = () => {
    }

    return (      
      <div style={style} ref="mapRef">
        <Grid>  
          <Row>
            <Col md={8} xs={12} style={colStyle}>
              <Map google={this.props.google}
                   zoom={this.props.mapSettings.zoom}
                   initialCenter={this.props.mapSettings.initialCenter}
                   draggable={this.props.mapSettings.draggable}
                   scrollwheel={this.props.mapSettings.scrollwheel}
                   zoomControl={this.props.mapSettings.zoomControl}
                   disableDefaultUI={this.props.mapSettings.disableDefaultUI}>
                <Marker position={{lat: this.props.mapSettings.initialCenter.lat, lng: this.props.mapSettings.initialCenter.lng}}
                        onClick={onMarkClick}/>
              </Map>
            </Col>
            <Col md={4} xs={12} style={colStyle}>
              <div style={rightPaneStyle}>
                <div style={tableStyle}>
                  <h4>HOURS</h4>
                  <span>MON-SUN &nbsp; 08:00-18:00 </span>
                </div>
                <br />
                <div style={tableStyle}>
                  <h4>CONTACT US (Prospect Auto)</h4>
                </div>
                <table style={tableStyle}>
                  <tbody>
                    <tr style={trStyle}>
                      <td style={tdStyle}>Phone: </td>
                      <td style={tdStyle}>617-354-2300</td>
                    </tr>
                    <tr style={trStyle}>
                      <td style={tdStyle}>Email: </td>
                      <td style={tdStyle}>harvardAuto@gmail.com</td>
                    </tr>
                    <tr style={trStyle}>
                      <td style={tdStyle}>Address: </td>
                      <td style={tdStyle}>247 Prospect St. Cambridge, MA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
           </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return  {
    passRefToState: (ref) => {
      dispatch(setRef(null, null, ref))
    }
  }
}

const VisibleMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer)

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(VisibleMap)