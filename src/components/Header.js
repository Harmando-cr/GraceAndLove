// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/gl-logo.svg"

const Header = () => (
  <header>
    <div class='flex px-24'>
      <div class='w-1/3 my-0 mx-auto py-4 px-5'>
        <img src={logo} alt="logo" class='w-32 my-0 border-0'></img>
      </div>
      <div class='w-2/3 my-0 mx-auto py-4 px-5'>
        <nav class='flex justify-end flex-wrap'>
          <div class="text-base font-poppins">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-600 mr-4">
              Nosotros
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-600 mr-4">
              Ayudas
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-600  mr-4">
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
