import React from "react"
// import { Link } from "gatsby"
import '../components/approach.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import logo from "../images/gl-logo.svg"


const SecondPage = ({location}) => (
  <>
    <div>
      <Header siteTitle='Home' location={location} />
    </div>
    <div class='pt-32 bg-white'>
      <div class='md:flex py-12' >
        <div class=' text-center w-full md:w-1/2 ' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
            Mision
          </p>
          <br/>
          <p class='inline-block align-middle text-justify px-10 text-black lg:px-32 pt-8' style={{margin:'auto'}}>
          Trabajamos para mejorar las condiciones de vida de las personas a través del acompañamiento integral para la mejora de sus condiciones, brindándoles productos de primera necesidad. 
          </p>
        </div>
        <div class='text-center w-1/2 pt-10 md:pt-0' style={{margin:'auto'}}>
          <img src={logo} alt="logo" class='md:block md:m-auto border-solid border-black border-1r border-b-2.5r p-6' 
          style={{width:'200px', transform: 'rotate(15deg)'}}/>
        </div>
      </div>
    </div>
    <div class='pt-8 bg-white'>
      <div class='hidden md:flex py-12' >
        <div class='text-center w-1/2 pb-12 md:pb-0' style={{margin:'auto'}}>
        <img src={logo} alt="logo" class='inline-block align-middle border-solid border-black border-1r border-b-2.5r p-6' 
        style={{width:'200px', transform: 'rotate(-15deg)', margin:'auto'}}/>
        </div>
        <div class=' text-center w-full md: w-1/2 ' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
            Vision
          </p>
          <br/>
          <p class='inline-block align-middle text-justify text-black px-8 lg:px-32 pt-8' style={{margin:'auto'}}>
          Buscar la transformación real de la sociedad basados en la solidaridad, la ética, los valores trascendentes, el bien común y el desarrollo de los sectores marginados.<br/>
          <br/>
          Nos proponemos ser testimonio de una forma diferente de actuación, a través de nuestros colaboradores en Colombia y replicarlo en los países que quieran unirse a esta causa y del acompañamiento que realizamos en las comunidades más necesitadas.<br/>
          <br/>
          Queremos ser una organización reconocida por el impacto de nuestras actuaciones en el bienestar y el desarrollo de las comunidades con las que trabajamos, así como por nuestra integridad y profesionalidad en el modo de actuar.
          </p>
        </div>
      </div>
      <div class='flex md:hidden' >
        <div class=' text-center w-full' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
            Vision
          </p>
          <br/>
          <p class='inline-block align-middle text-justify text-black px-8 lg:px-32 pt-8' style={{margin:'auto'}}>
          Buscar la transformación real de la sociedad basados en la solidaridad, la ética, los valores trascendentes, el bien común y el desarrollo de los sectores marginados.<br/>
          <br/>
          Nos proponemos ser testimonio de una forma diferente de actuación, a través de nuestros colaboradores en Colombia y replicarlo en los países que quieran unirse a esta causa y del acompañamiento que realizamos en las comunidades más necesitadas.<br/>
          <br/>
          Queremos ser una organización reconocida por el impacto de nuestras actuaciones en el bienestar y el desarrollo de las comunidades con las que trabajamos, así como por nuestra integridad y profesionalidad en el modo de actuar.
          </p>
          <div class='text-center w-1/2 py-12 ' style={{margin:'auto'}}>
          <img src={logo} alt="logo" class='inline-block align-middle border-solid border-black border-1r border-b-2.5r p-6' 
            style={{width:'200px', transform: 'rotate(-15deg)', margin:'auto'}}/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
)

export default SecondPage
