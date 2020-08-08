import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/gl-logo.svg"

class Header extends React.Component {
  state = {
    imgSize: 'Big',
    lastScrollTop: 0,
    delta: 700,
    headerStyle: {},
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const { pageYOffset } = window;
    const { imgSize, lastScrollTop, delta } = this.state;

    if (pageYOffset >= 500 && imgSize === 'Big') {
      this.setState({imgSize: 'Small'});
    } else if (pageYOffset < 500 && imgSize === 'Small') {
      this.setState({imgSize: 'Big'});
    }

    // if (Math.abs(lastScrollTop - pageYOffset) <= delta) return

    // if (pageYOffset > lastScrollTop){
    //   this.setState({headerStyle:'-mt-32'})
    // } else if (pageYOffset < lastScrollTop) {
    //   this.setState({headerStyle:'mt-0'})
    // }

    // this.setState({lastScrollTop: pageYOffset})
  };

  render() {
    const { imgSize, headerStyle } = this.state
    const bgHeader = imgSize === 'Small' ? 'bg-white' : 'bg-gl-red'
    const textColor = imgSize === 'Small' ? 'text-black' : 'text-white'
    const imgStyle = imgSize === 'Small' ? 'my-0 border-0 w-20' : 'my-0 border-0 w-20 hidden'
    const navStyle = imgSize === 'Small' ? 'block text-sm lg:text-base lg:mt-4 lg:inline-block lg:mt-0 hover:font-bold' : 'block mt-4 lg:inline-block lg:mt-0 hover:font-bold'
    return (
    <header class={'fixed z-10 top-0 w-full ' + headerStyle + ' ' + bgHeader} >
      <div class='flex flex-wrap lg:px-24'>
        <div class='mt-8 h-auto lg:mt-0 w-1/2 lg:w-1/3 mx-auto lg:py-4 lg:px-5'>
        <Link to="/"><img src={logo} alt="logo" class={imgStyle}/></Link>        
        </div>
        <div class='w1/2 lg:w-2/3 my-0 mx-auto py-4 px-5'>
          <nav class='flex justify-end text-right'>
            <div class={'font-poppins ' + textColor}>
              <a class={navStyle + ' mt-2'}>
                Nosotros
              </a>
              <a class={navStyle + ' ml-4'}>
                Ayudas
              </a>
              <a class={navStyle + ' ml-4'}>
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
