import React from 'react'


const para = {
  marginBottom: '50px',
}

const FooterLegal = () => (
  <div>
    <p style={para}>
      Harvard Auto Schools is bringing trust and simplicity to the used car market. Our goal is to turn what is universally regarded as a burdensome life event into a delightful experience.
    </p>
    <ul className="list-inline">
       <li>
          <p className="copyright text"> © Prospect auto</p>
       </li>
       <li className="footer-menu-divider">&sdot;</li>
       <li>
          <p id="author" className="copyright text-muted small">Created By Jumbos</p>
       </li>
       <li className="footer-menu-divider">&sdot;</li>
       <li>
          <p className="copyright text-muted small">
             Copyright Aug. 2017
          </p>
       </li>
    </ul>
  </div>
)

export default FooterLegal