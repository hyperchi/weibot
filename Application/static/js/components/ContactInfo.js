import React from 'react'
import { Image} from 'react-bootstrap';


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

const textStyle = {
  height: "22vh",
}

const imgStyle = {
  width: "8vh",
  margin: '3%',
  height: "8vh"
}

const imgGrid = {
}

class ContactInfo extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div style={rightPaneStyle}>
        <div style={textStyle}>
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
        <div  style={imgGrid}>
          <Image  style={imgStyle} src="static/img/公众号二维码.jpg" alt="135x135" />
          <Image  style={imgStyle} src="static/img/微信客服二维码.png" alt="135x135" />
        </div>
      </div>
    )
  }
}

export default ContactInfo