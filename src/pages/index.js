import React from "react"

// import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from '../components/Header'
import Footer from '../components/Footer'
import logo from "../images/gl-logo-white.svg"
// import CenterTitle from "../components/CenterTitle"

const IndexPage = () => (
  <>
    <div>
      <Header siteTitle='Home' />
    </div>
    <div class='mt-32'>
      <SEO title="Home" />
      <div class='text-white text-center text-2xl font-candara p-8 w-full '>
        <div>
          <img src={logo} alt="logo" class='block m-auto' style={{width:'400px'}}/>
        </div>
        <div class='mt-8' >
          <span class='h-12 pt-12'> Se mejor persona en la vida real que en las redes sociales </span>
        </div>
     </div>
    </div>
    <div class='mt-64'>
      <div class='absolute w-2/3 xxl:w-1/2' style={{
        borderRight: '6rem solid transparent',
        borderTop: '6rem solid #d43438',
        height: 0}}>
      </div>
      <div class='absolute text-left text-white h-24 w-1/3'>
        <h1 class='inline-block font-blackhand mb-0 ml-4 text-2xl mt-8 lg:text-5xl lg:ml-56 xxl:mt-7'> NOSOTROS </h1>
      </div>
      <div class='w-full p-32 text-justify border-solid border-t-3.5r border-white bg-white'>
        <span class='text-black'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, turpis vitae varius lobortis, ante odio maximus ipsum, eget fringilla odio urna non quam. Phasellus ut aliquam ante. Fusce vulputate pulvinar arcu, sit amet condimentum purus tincidunt vitae. Fusce ultrices interdum lectus, vitae convallis elit laoreet convallis. Fusce ut mauris efficitur, ultricies felis aliquam, accumsan neque. Donec finibus ligula at elit varius porttitor. Maecenas ut hendrerit urna. Vivamus turpis magna, tincidunt sit amet erat sed, fermentum mattis lacus. Suspendisse commodo orci nec orci fermentum, id vulputate diam posuere. Sed eleifend eget quam ac convallis. Morbi et posuere ligula. Nunc sit amet lorem nec ante viverra semper. Nunc vitae dictum nisl, at ullamcorper ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas fringilla ligula in tellus mollis, ut pellentesque ex ultrices.</span>
      </div>
    </div>
    
    <div class='flex h-64 mt-12'>
      <div class='w-1/2'>
        <div class='text-center font-blackhand text-5xl p-3 mt-32'><span class='p-3 border-green-500 text-white'> Misión </span></div>
      </div>
      <div class='w-1/2'>
        <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, turpis vitae varius lobortis, ante odio maximus ipsum, eget fringilla odio urna non quam. Phasellus ut aliquam ante. Fusce vulputate pulvinar arcu, sit amet condimentum purus tincidunt vitae. Fusce ultrices interdum lectus, vitae convallis elit laoreet convallis. Fusce ut mauris efficitur, ultricies felis aliquam, accumsan neque. Donec finibus ligula at elit varius porttitor. Maecenas ut hendrerit urna. Vivamus turpis magna, tincidunt sit amet erat sed, fermentum mattis lacus. Suspendisse commodo orci nec orci fermentum, id vulputate diam posuere. Sed eleifend eget quam ac convallis. Morbi et posuere ligula. Nunc sit amet lorem nec ante viverra semper. Nunc vitae dictum nisl, at ullamcorper ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas fringilla ligula in tellus mollis, ut pellentesque ex ultrices.</span>
      </div>
    </div>
    <div class='flex h-64 mt-12'>
      <div class='w-1/2'>
        <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, turpis vitae varius lobortis, ante odio maximus ipsum, eget fringilla odio urna non quam. Phasellus ut aliquam ante. Fusce vulputate pulvinar arcu, sit amet condimentum purus tincidunt vitae. Fusce ultrices interdum lectus, vitae convallis elit laoreet convallis. Fusce ut mauris efficitur, ultricies felis aliquam, accumsan neque. Donec finibus ligula at elit varius porttitor. Maecenas ut hendrerit urna. Vivamus turpis magna, tincidunt sit amet erat sed, fermentum mattis lacus. Suspendisse commodo orci nec orci fermentum, id vulputate diam posuere. Sed eleifend eget quam ac convallis. Morbi et posuere ligula. Nunc sit amet lorem nec ante viverra semper. Nunc vitae dictum nisl, at ullamcorper ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas fringilla ligula in tellus mollis, ut pellentesque ex ultrices.</span>
      </div>
      <div class='w-1/2'>
        <span> Lorem.</span>
      </div>
    </div>
    
    <Footer/>
  </>
      

)

export default IndexPage
