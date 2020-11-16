import React from 'react'
import PropTypes from 'prop-types'

import ig from "../images/instagram.svg"
import fb from "../images/facebook.svg"
import tw from "../images/twitter.svg"


const Footer = () => (
  <footer className='flex bottom-0 w-full justify-center bg-black pt-5'>
    <a href='https://www.instagram.com/gracelovefound/' className='mr-4'>
      <img src={ig} alt="instagram" className='w-6 '/>
    </a>
    <a href='https://www.facebook.com/gracelovefound' className='mr-4'>
      <img src={fb} alt="instagram" className='w-6'/>
    </a>
    <a href='https://twitter.com/Gracelovefound'>
      <img src={tw} alt="instagram" className='w-6'/>
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