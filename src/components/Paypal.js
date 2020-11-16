import React from "react";

import done from "../images/Done.svg"
import errorImg from "../images/error.svg"


export default function ReactPayPal(props) {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [amount] = React.useState(props.amount);
  const paypalRef = React.useRef();
  // To show PayPal buttons once the component loads
  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "test",
                amount: {
                  currency_code: "USD",
                  value: +Number.parseFloat(amount).toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
        setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [amount]);

  // If the payment has been made
  if (paid) {
    return (
    <div className='w-full text-center justify-center content-center'>
      <img src={done} alt="Done" className='inline-block align-middle pt-8' style={{width:'100px'}}/>
      <p className='w-full text-center text-lg font-poppins'>Donación exitosa</p>
    </div>
    )
  }

  // If any error occurs
  if (error) {
    return (
      <div className='w-full text-center justify-center content-center'>
        <img src={errorImg} alt="error" className='inline-block align-middle pt-8' style={{width:'100px'}}/>
        <p className='w-full text-center text-lg font-poppins'>Hubo un error en la donación, por favor intente nuevamente</p>
      </div>
      )
  }

  // Default Render
  return (
    <div>
      <h4> Monto: {amount} $</h4>
      <div ref={paypalRef} />
    </div>
  );
}