import React from "react";
import emailjs from '@emailjs/browser';

import SlideContact from '../SlideContact/SlideContact'

import "./contact.scss";

const Contact = () => {

  const [button, setButton] = React.useState('Enviar');
  const [stateButton, setStateButton] = React.useState(true);

  // HANDLE EMAIL

  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wkxuaeo', 'template_uu3to7o', form.current, 'us18y3zU0wtYjGDvM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    form.current.reset();
    setButton("Enviado!")
    setStateButton(false)
  };

  return (
    <section id="contact">
      <h5>Entre em</h5>
      <h2>Contato</h2>

      <div className="container contact_container">
        <SlideContact className="slide"/>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Nome completo" required />
          <input type="email" name='email' placeholder="E-mail" required />
          <textarea name="message" rows="10" placeholder="Escreva sua mensagem..."></textarea>
          
          <button type="submit"
            className={`btn btn-primary sub-button ${!stateButton ? 'disabled' : ''}`}
            // disabled={!stateButton}
          >
            {button}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
