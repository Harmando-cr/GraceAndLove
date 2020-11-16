import React from "react"
import Helmet from "react-helmet"
import CurrencyInput from 'react-currency-input-field';

import '../styles/donation.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReactPayPal from '../components/Paypal';

import characters from "../images/characters.jpeg"

export default function DonationPage({location}) {
const [checkout, setCheckout] = React.useState(false);
const [amount, setAmount] = React.useState(100);
const donateButton = 'text-center text-black text-lg w-40 justify-center font-poppins p-3 border-2 border-black rounded-lg hover:text-white  hover:bg-gl-red hover:border-opacity-0'
const backButton = 'text-center text-black text-lg w-40 justify-center font-poppins p-3 border-2 border-black rounded-lg hover:bg-gray-200'
const inputAmount = 'text-center text-black text-lg w-40 justify-center font-poppins p-3 mb-5 border-2 border-black rounded-lg'

return (
    <>
    <Helmet>
        <script src="https://www.paypal.com/sdk/js?client-id=Ac6Cqgcj68oQ4_Rq3D3f5UsQyCYr3mYCnP0EdMeZnyHgboGNOaHADNkIRxhJrlF-lS5SgbVwHFZxHe56&currency=USD" type="text/javascript" />
    </Helmet>
    <div>
      <Header siteTitle='Nosotros' location={location} />
    </div>
    <div className = 'flex content-center flex-wrap w-full justify-center min-h-screen bg-white px-12 lg:px-40'>
        {(checkout === true) 
        ? <>
        <div className="payment-div">
            <ReactPayPal amount={amount}/>
            <button onClick={() => {setCheckout(false)}} className={backButton}>Atras</button>
        </div> </>

        :<>
        <p className='w-full text-center text-lg pt-32'>Con tu donación podremos ayudar a muchas personas, sé parte de la obra de Grace and Love, y llevemos alegría a quienes más lo necesitan</p>
        <h1 className='w-full text-center pt-4 pb-0 mb-0 text-gl-red font-blackhand font-light'>"No hay nada mas fuerte en el mundo que el corazón de un voluntario"</h1>
        <p className='w-full text-right text-base pt-0 mt-0'>James H. Doolittle</p>

        <br/>
        <div className='w-full text-center justify-center content-center'>
            <div>
                <CurrencyInput allowDecimals={true} prefix='$ ' placeholder="$ 100" decimalsLimit={2} decimalSeparator="," groupSeparator="." onChange={value => setAmount(value)} className={inputAmount}/>
            </div>
            <button onClick={() => {setCheckout(true)}} className={donateButton}>Donar</button>
        </div>
            
        <img src={characters} alt="characters" className='pt-5' style={{width:'400px'}}/>
        </>
        }
    </div>
    <Footer/>
    </>
);
}