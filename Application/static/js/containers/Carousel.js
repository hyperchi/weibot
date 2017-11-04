import { connect } from 'react-redux'
import { setOffset, setRef } from '../actions'
import TestCarousel from '../components/TestCarousel'


const mapStateToProps = state => {
    console.log(state)
    return {
        offset: state.offset
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSelect: (selectedIndex, e) => {
            dispatch(setOffset(selectedIndex, e.direction))
        },
        passRefToState: (ref) => {
            dispatch(setRef(ref))
        }
    }
}


const Carousel = connect(
    mapStateToProps,
    mapDispatchToProps
)(TestCarousel)

export default Carousel