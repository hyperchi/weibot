import { connect } from 'react-redux'
import { setOffset } from '../actions'
import TestCarousel from '../components/TestCarousel'


const mapStateToProps = state => {
  return {
    offset: state.offset
  }
}


const mapDispatchToProps = (dispatch, selectedIndex, e) => {
  return {
    handleSelect: () => {
      dispatch(setOffset(selectedIndex, e.direction))
    }
  }
}

const Carousel = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestCarousel)

export default Carousel