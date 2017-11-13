import { connect } from 'react-redux'
import { setOffset, setRef } from '../actions'
import {VideoOverlay as VideoOverlayComp} from '../components/VideoOverlay'


const mapStateToProps = state => {
    return {
        scrollRef: state.scrollRef
    }
}

const VideoOverlay = connect(
    mapStateToProps
)(VideoOverlayComp)

export default VideoOverlay