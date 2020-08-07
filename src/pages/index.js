import React from "react"

// import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from '../components/Header'
import Footer from '../components/Footer'
// import CenterTitle from "../components/CenterTitle"

const IndexPage = () => (
  <>
    <div>
      <Header siteTitle='Home' />
    </div>
    <div class='bg-gl-red mt-64 border-t-4 border-b-4 border-black'>
      <SEO title="Home" />
      <div class='text-white text-center text-3xl font-candara p-8 w-full'>
       <span> Se mejor persona en la vida real que en las redes sociales </span>
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
      <div class='w-full bg-black h-32 pt-32' style={{borderTop: '3.5rem solid white'}}>

      </div>
    </div>
    
    <div class='mt-64 h-64'>

    </div>
    
      
      <Footer/>
  </>
      

)

export default IndexPage
