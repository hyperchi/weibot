import React from 'react'
import {ResponsiveEmbed} from 'react-bootstrap';
import VideoOverlay from '../containers/VideoOverlay'

const VideoContainer = {
  position: 'relative',
  height: '70vh',
  overflow: 'hidden'
}

const video = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: '-100',
    transform: 'translateX(-50%) translateY(-50%)',
    // height: '100%',
    // width: '100%',
}




/*{ <iframe frameBorder="0" style={video}
  src="https://youtube.com/embed/z2zHhOTaWqA?rel=0&autoplay=1&controls=0&showinfo=0&autohide=1&disablekb=1&loop=1">
</iframe> }*/

class Video extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <VideoOverlay />
        <div style={VideoContainer}>
          <video autoPlay loop id="video-background" muted playsInline style={video}>
           <source src="static/video/heroVideo.mp4" type="video/mp4" />
        </video>
        </div>
      </div>
    )
  }
}

export default Video