import React from "react"

import '../components/index.css'
import SEO from "../components/Seo"
import Header from '../components/Header'
import Footer from '../components/Footer'
import logo from "../images/gl-logo-all-white.svg"

const IndexPage = ({location}) => (
  <>
    <div>
      <Header siteTitle='Home' location={location}/>
    </div>
    <div class='mt-32 md:mt-28 xxl:mt-56'>
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
      <div class='text-left text-black bg-white h-24 w-full pt-4'>
        <h1 class='inline-block font-blackhand mb-0 ml-4 text-2xl mt-8 lg:text-5xl lg:ml-48 xxl:mt-7'> ¿Quienes Somos? </h1>
      </div>
      <div class='w-full px-8 lg:px-32 md:pt-8 pb-12 text-justify bg-white'>
        <p class='text-black'> Una entidad de bien público sin fines de lucro que desarrolla actividades sociales en nuestra comunidad, brindando asistencia a los sectores más carenciados de la sociedad. Inscrita bajo el Nit 901138242-8. <br/>
        <br/>
        No somos solo una fundación, somos los guardianes de los menos favorecidos.
        </p>
      </div>
    </div>
    <div >
      <div class='text-left text-black h-24 w-full pt-4 bg-gray-200'>
        <h1 class='inline-block font-blackhand mb-0 ml-4 text-2xl mt-8 lg:text-5xl lg:ml-48 xxl:mt-7'> ¿Como Actuamos? </h1>
      </div>
      <div class='w-full px-8 lg:px-32 md:pt-8 pb-16 text-justify bg-gray-200'>
        <p class='text-black'> Desde su nacimiento, hace ya 23 años, habiendo enfrentado en nuestra propia vida carencias básicas y problemas sociales como adicciones, pudimos vivir de cerca este mundo de aquellos que solo necesitan muchas veces una mirada amable, una sonrisa, una palabra de aliento. Y entendimos que como dice el pensador C.S Lewis, “Las dificultades preparan a personas comunes para destinos extraordinarios “<br/>
        <br/>
        Decidimos tomar acción para ayudar a aquellos que, sin esperanza, no encuentran muchas veces el apoyo en lo básico que debe tener el ser humano. Sabemos que no podemos ayudar a todos, pero si podemos todos ayudar a alguien. <br/>
        <br/>
        Hoy la Fundación cuenta con varias áreas de desarrollo: Acción Social incluyendo nuestro programa permanente, Cajita de Gracia y Amor, víveres de primera necesidad para familias de escasos recursos, programas alimenticios para niños y niñas en situación de vulnerabilidad, apoyo al emprendimiento laboral, entre otros.</p>
      </div>
    </div>  
    <Footer/>
  </>
      

)

export default IndexPage
