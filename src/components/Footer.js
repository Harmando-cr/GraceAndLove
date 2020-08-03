import React from 'react'
import PropTypes from 'prop-types'

import ig from "../images/instagram.svg"
import fb from "../images/facebook.svg"
import tw from "../images/twitter.svg"


const Footer = () => (
  <footer class='fixed flex bottom-0 w-full justify-center'>
    <a href='https://www.instagram.com/gracelovefound/' class='mr-4'>
      <img src={ig} alt="instagram" class='w-6 '/>
    </a>
    <a href='https://www.instagram.com/gracelovefound/' class='mr-4'>
      <img src={fb} alt="instagram" class='w-6'/>
    </a>
    <a href='https://www.instagram.com/gracelovefound/'>
      <img src={tw} alt="instagram" class='w-6'/>
    </a>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer