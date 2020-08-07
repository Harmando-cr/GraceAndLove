import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/gl-logo.svg"

const defaultState = {
  imgSize: 'Big',
}

const HeaderContext = React.createContext(defaultState)

class Header extends React.Component {
  state = {
    imgSize: 'Big',
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const { pageYOffset } = window;
    const { imgSize } = this.state;

    if (pageYOffset >= 200 && imgSize === 'Big') {
      this.setState({imgSize: 'Small'});
    } else if (pageYOffset < 200 && imgSize === 'Small') {
      this.setState({imgSize: 'Big'});
    }
  };

  render() {
    const { imgSize } = this.state 
    const imgStyle = imgSize === 'Small' ? 'my-0 border-0 w-32 lg:w-20' : 'my-0 border-0 w-32'
    return (
    <header class='fixed z-10 top-0 w-full bg-white' >
      <div class='flex flex-wrap lg:px-24'>
        <div class='mt-8 h-auto lg:mt-0 w-1/2 lg:w-1/3 mx-auto lg:py-4 lg:px-5'>
        <Link to="/"><img src={logo} alt="logo" class={imgStyle} /></Link>        
        </div>
        <div class='w1/2 lg:w-2/3 my-0 mx-auto py-4 px-5'>
          <nav class='flex justify-end flex-wrap text-right'>
            <div class="font-poppins">
              <a class="block mt-4 lg:inline-block lg:mt-0 hover:font-bold">
                Nosotros
              </a>
              <a class="block mt-4 lg:inline-block lg:mt-0 hover:font-bold ml-4">
                Ayudas
              </a>
              <a class="block mt-4 lg:inline-block lg:mt-0 hover:font-bold ml-4">
                Blog
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
    )}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
