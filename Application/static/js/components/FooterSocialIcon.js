import React from 'react'

const styleIcon = {
  filter: 'brightness(0) invert(1)'
}

const FooterSocialIcon = () => (
    <div className="row" style={styleIcon}>
        <div className="col-lg-12">
            <ul className="list-inline">
                <li>
                    <img className="social-icon" src="static/img/twitter.svg" /><a href="#">   Twitter</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                    <img className="social-icon"  src="static/img/facebook.svg" /><a href="#">   Facebook</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                    <img className="social-icon"  src="../static/img/yelp.svg" /><a href="#">   Yelp </a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                    <img className="social-icon" src="../static/img/instagram.svg" /><a id="bootstraplink" href="#">  Instagram </a>
                </li>
            </ul>
        </div> 
    </div>
)

export default FooterSocialIcon
