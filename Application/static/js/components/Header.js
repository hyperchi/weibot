import React from 'react'
import PropTypes from 'prop-types';

const header = {
  marginTop: '0px'
}

const scrollOffset = 50

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToRepair() {
    window.scroll({
      top: this.props.scrollRef.repairRef.offsetTop - scrollOffset,
      behavior: 'smooth'
    });
  }

  scrollToCarousal() {
    window.scroll({
      top: this.props.scrollRef.carousalRef.offsetTop - scrollOffset,
      behavior: 'smooth'
    });
  }

  scrollToMap() {
    window.scroll({
      top: this.props.scrollRef.mapRef.offsetTop - scrollOffset,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="container" style={header}>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a onClick={this.scrollToRepair.bind(this)}>REPAIR</a></li>
            <li><a onClick={this.scrollToCarousal.bind(this)}>WHO WE ARE</a></li>
            <li className="pull-right"><a onClick={this.scrollToMap.bind(this)}>CONTACT US</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  scrollRef: PropTypes.object,
}


export default Header