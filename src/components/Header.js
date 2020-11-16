import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import logo from "../images/gl-logo.svg"

const Header = (props) => {
  const url = props.location ? props.location.pathname : ''
  const [imgSize, setImgSize] = React.useState('Big');
  const [location] = React.useState(url);

  const handleScroll = React.useCallback (event => {
    const { pageYOffset } = window;
    
    if (pageYOffset >= 500 && imgSize === 'Big' && location === '/') {
      setImgSize('Small');
    } else if (pageYOffset < 500 && imgSize === 'Small' && location === '/') {
      setImgSize('Big');
    }
  },[imgSize, location]);

  React.useEffect(() => {
    if (location !== '/') {
      setImgSize('Small');
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll, location, setImgSize])

  const bgHeader = imgSize === 'Small' ? 'bg-white' : 'bg-gl-red'
  const textColor = imgSize === 'Small' ? 'text-black' : 'text-white'
  const imgStyle = imgSize === 'Small' ? 'my-0 border-0 w-20' : 'my-0 border-0 w-20 hidden'
  const navStyle = imgSize === 'Small' ? 'block text-sm lg:text-base lg:mt-4 lg:inline-block lg:mt-0 hover:font-bold' : 'block mt-4 lg:inline-block lg:mt-0 hover:font-bold'
   
  return (
    <header className={'fixed z-10 top-0 w-full ' + bgHeader}>
      <div className='flex flex-wrap lg:px-24'>
        <div className='mt-8 h-auto lg:mt-0 w-1/2 lg:w-1/3 mx-auto lg:py-4 lg:px-5'>
        <Link to="/"><img src={logo} alt="logo" className={imgStyle}/></Link>        
        </div>
        <div className='w1/2 lg:w-2/3 my-0 mx-auto py-4 px-5'>
          <nav className='flex justify-end text-right'>
            <div className={'font-poppins ' + textColor}>
              <Link to="/" className={navStyle}>
                Nosotros
              </Link>
              <Link to="/approach" className={navStyle + ' ml-4'}>
                Enfoque
              </Link>
              <Link to="/donation" className={navStyle + ' ml-4'}>
                Donaciones
              </Link>   
            </div>
          </nav>
        </div>
      </div>
    </header>
  )}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
