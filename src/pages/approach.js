import React from "react"
// import { Link } from "gatsby"
import '../components/approach.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import photo1 from "../images/photo08.jpeg"
import photo2 from "../images/photo06.jpeg"
import photo3 from "../images/photo01.jpeg"
import photo4 from "../images/photo03.jpeg"
import photo5 from "../images/photo04.jpeg"
import photo6 from "../images/photo11.jpeg"

const SecondPage = ({location}) => (
  <>
    <div>
      <Header siteTitle='Home' location={location} />
    </div>
    <div class='pt-32 bg-white'>
      <div class='hidden md:flex py-12' >
        <div class=' text-center w-full md:w-2/3 ' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
            Mision
          </p>
          <br/>
          <p class='inline-block align-middle text-justify px-10 text-black lg:px-32 pt-8' style={{margin:'auto'}}>
          Trabajamos para mejorar las condiciones de vida de las personas a través del acompañamiento integral para la mejora de sus condiciones, brindándoles productos de primera necesidad. 
          </p>
        </div>
        <div class='text-center w-1/3 pt-10 md:pt-0 pr-32' style={{margin:'auto'}}>
          <img src={photo1} alt="logo" class='md:block md:m-auto border-solid border-black border-1r border-b-2.5r p-1' 
          style={{width:'300px', transform: 'rotate(15deg)'}}/>
        </div>
      </div>
      <div class='flex md:hidden' >
        <div class=' text-center w-full' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
            Mision
          </p>
          <br/>
          <p class='inline-block align-middle text-justify text-black px-8 lg:px-32 pt-8' style={{margin:'auto'}}>
            Trabajamos para mejorar las condiciones de vida de las personas a través del acompañamiento integral para la mejora de sus condiciones, brindándoles productos de primera necesidad. 
          </p>
          <div class='text-center w-1/2 py-12 ' style={{margin:'auto'}}>
            <img src={photo1} alt="logo" class='inline-block align-middle border-solid border-black border-1r border-b-2.5r p-1' 
              style={{width:'200px', transform: 'rotate(15deg)', margin:'auto'}}/>
          </div>
        </div>
      </div>
    </div>
    <div class='pt-8 bg-white'>
      <div class='hidden md:flex py-12' >
        <div class='text-center w-1/3 pb-12 md:pb-0 pl-32' style={{margin:'auto'}}>
        <img src={photo2} alt="logo" class='inline-block align-middle border-solid border-black border-1r border-b-2.5r p-1' 
        style={{width:'300px', transform: 'rotate(-15deg)', margin:'auto'}}/>
        </div>
        <div class=' text-center w-full md:w-2/3 ' style={{margin:'auto'}}>
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
          <img src={photo2} alt="logo" class='inline-block align-middle border-solid border-black border-1r border-b-2.5r p-1' 
            style={{width:'200px', transform: 'rotate(-15deg)', margin:'auto'}}/>
          </div>
        </div>
      </div>
    </div>
    <div class='pt-4 bg-white'>
      <div class='md:flex py-12' >
        <div class=' text-center w-full' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
            Valores
          </p>
        </div>
      </div>
    </div>
    <div class='pt-4 bg-white'>
      <div class='md:flex pt-4' >
        <div class=' text-center w-full md:w-1/2 ' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
          Solidaridad
          </p>
        </div>
          <div class='hidden md:flex text-center w-full md:w-1/2 ' style={{margin:'auto'}}>
            <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
            Compromiso
            </p>
          </div>
      </div>   
      <div class='md:flex' >
        <div class=' text-center w-full md:w-1/2 '>
          <p class='inline-block text-justify px-10 text-black lg:px-24 pt-8'>
          Construimos un enfoque de desarrollo basado en Derechos Humanos, orientado a su cumplimiento y a erradicar la desigualdad en las comunidades con las que trabajamos, invitando a todos los que tengan la inquietud de ayudar a quienes más lo necesitan.
          </p>
        </div>
        <div class='flex md:hidden pt-12' >
          <div class=' text-center w-full md:w-1/2 ' style={{margin:'auto'}}>
            <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
            Compromiso
            </p>
          </div>
        </div>
        <div class=' text-center w-full md:w-1/2 '>
          <p class='inline-block text-justify px-10 text-black lg:px-24 pt-8'>
          Con las personas a las que acompañamos para lograr mejorar sus vidas con una muestra de amor.
          </p>
        </div>
      </div>
    </div>
    <div class='md:flex'>
      <div class='text-center py-4 md:py-12 w-1/2' style={{margin:'auto'}}>
        <img src={photo3} alt="logo" class='inline-block align-middle border-solid border-white border-1r border-b-2.5r ' 
            style={{width:'400px',margin:'auto'}}/>
      </div>
      <div class='text-center py-4 md:py-12 w-1/2' style={{margin:'auto'}}>
        <img src={photo4} alt="logo" class='inline-block align-middle border-solid border-white border-1r border-b-2.5r ' 
            style={{width:'400px',margin:'auto'}}/>
      </div>
    </div>
    <div class='pt-4 bg-white'>
      <div class='md:flex pt-4' >
        <div class=' text-center w-full md:w-1/2 ' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
          Cercanía
          </p>
        </div>
        <div class='hidden md:flex text-center w-full md:w-1/2' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
          Entrega
          </p>
        </div>
      </div>   
      <div class='md:flex' >
        <div class=' text-center w-full md:w-1/2 '>
          <p class='inline-block text-justify px-10 text-black lg:px-24 pt-8'>
          Una entidad con las puertas abiertas a las personas necesitadas, que ayuda directamente en un ámbito de actuación concreto y próximo.
          </p>
        </div>
        <div class='flex md:hidden pt-12' >
          <div class=' text-center w-full md:w-1/2 ' style={{margin:'auto'}}>
            <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
            Entrega
            </p>
          </div>
        </div>  
        <div class=' text-center w-full md:w-1/2 '>
          <p class='inline-block text-justify px-10 text-black lg:px-24 pt-8'>
          Ayudar poniendo al servicio de los demás lo mejor de nosotros mismos, acoger a las personas necesitadas sin importar su edad, sexo, raza, procedencia o formación, siendo ellas nuestra prioridad.
          </p>
        </div>
      </div>
    </div>
    <div class='md:flex'>
      <div class='text-center py-4 md:py-12 w-1/2' style={{margin:'auto'}}>
        <img src={photo5} alt="logo" class='inline-block align-middle border-solid border-white border-1r border-b-2.5r ' 
            style={{width:'300px',margin:'auto'}}/>
      </div>
      <div class='text-center py-4 md:py-12 w-1/2' style={{margin:'auto'}}>
        <img src={photo6} alt="logo" class='inline-block align-middle border-solid border-white border-1r border-b-2.5r ' 
            style={{width:'300px',margin:'auto'}}/>
      </div>
    </div>
    <div class='pt-4 bg-white pb-12'>
      <div class='md:flex pt-4' >
        <div class=' text-center w-full md:w-1/2 ' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
          Crecimiento
          </p>
        </div>
        <div class='hidden md:flex text-center w-full md:w-1/2' style={{margin:'auto'}}>
          <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
          Integridad
          </p>
        </div>
      </div>   
      <div class='md:flex' >
        <div class=' text-center w-full md:w-1/2 '>
          <p class='inline-block text-justify px-10 text-black lg:px-24 pt-8'>
          Búsqueda constante de hacer más. Abiertos a trabajar con otras organizaciones, empresas y fundaciones para lograr nuestros objetivos de ayuda y el mayor beneficio para las personas a las que atendemos.
          </p>
        </div>
        <div class='flex md:hidden pt-12' >
          <div class=' text-center w-full md:w-1/2 ' style={{margin:'auto'}}>
            <p class='inline-block align-middle font-blackhand text-4xl ' style={{margin:'auto'}}>
            Integridad
            </p>
          </div>
        </div>
        <div class=' text-center w-full md:w-1/2 '>
          <p class='inline-block text-justify px-10 text-black lg:px-24 pt-8'>
          Buscamos ser integrales en nuestros modelos de acompañamiento y formación, proponiendo soluciones duraderas para erradicar las causas de la exclusión y superar obstáculos personales, sociales o profesionales para promover la inserción.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
  </>
)

export default SecondPage
