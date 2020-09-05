import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import logo from "../images/gl-logo.svg"

class Header extends React.Component {
  constructor(props) {
    super(props);
    const url = props.location ? props.location.pathname : ''
    this.state = {
      imgSize: 'Big',
      location: url,
    };
  }

  componentDidMount() {
    const { location } = this.state
    if (location !== '/') {
      this.setState({imgSize: 'Small'});
    }
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const { pageYOffset } = window;
    const { imgSize, location } = this.state;
    
    if (pageYOffset >= 500 && imgSize === 'Big' && location === '/') {
      this.setState({imgSize: 'Small'});
    } else if (pageYOffset < 500 && imgSize === 'Small' && location === '/') {
      this.setState({imgSize: 'Big'});
    }
  };

  render() {
    const { imgSize, location } = this.state
    const bgHeader = imgSize === 'Small' ? 'bg-white' : 'bg-gl-red'
    const textColor = imgSize === 'Small' ? 'text-black' : 'text-white'
    const imgStyle = imgSize === 'Small' ? 'my-0 border-0 w-20' : 'my-0 border-0 w-20 hidden'
    const navStyle = imgSize === 'Small' ? 'block text-sm lg:text-base lg:mt-4 lg:inline-block lg:mt-0 hover:font-bold' : 'block mt-4 lg:inline-block lg:mt-0 hover:font-bold'
    
    return (
    <header class={'fixed z-10 top-0 w-full ' + bgHeader}>
      <div class='flex flex-wrap lg:px-24'>
        <div class='mt-8 h-auto lg:mt-0 w-1/2 lg:w-1/3 mx-auto lg:py-4 lg:px-5'>
        <Link to="/"><img src={logo} alt="logo" class={imgStyle}/></Link>        
        </div>
        <div class='w1/2 lg:w-2/3 my-0 mx-auto py-4 px-5'>
          <nav class='flex justify-end text-right'>
            <div class={'font-poppins ' + textColor}>
              <Link to="/">
              <a class={navStyle}>
                Nosotros
              </a>
              </Link>
              <Link to="/approach">
              <a class={navStyle + ' ml-4'}>
                Enfoque
              </a>
              </Link>
              <Link to={location}>
              <a class={navStyle + ' ml-4'}>
                Blog
              </a>
              </Link>   
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
