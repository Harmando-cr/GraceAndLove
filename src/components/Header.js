import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/gl-logo-white.svg"

const Header = () => (
  <header>
    <div class='flex flex-wrap lg:px-24'>
      <div class='mt-8 lg:mt-0 sm:w-1/2 lg:w-1/3 mx-auto lg:py-4 lg:px-5'>
      <Link to="/"><img src={logo} alt="logo" class='w-32 my-0 border-0'/></Link>        
      </div>
      <div class='sm:w1/2 lg:w-2/3 my-0 mx-auto py-4 px-5'>
        <nav class='flex justify-end flex-wrap'>
          <div class="text-base font-poppins">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-4">
              Nosotros
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-4">
              Ayudas
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold  mr-4">
              Blog
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
