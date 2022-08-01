import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import '../components/contact1.css';
import Swal from 'sweetalert2';
// import './App.css';
const SERVICE_ID = "service_wyt39bm";
const TEMPLATE_ID = "template_bad3tuo";
const PUBLIC_KEY = "RV01H2U9ifTE3O6hT";
const Contactone = () => {
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
//       .then((result) => {
//         console.log(result.text);
//         Swal.fire({
//           icon: 'success',
//           title: 'Message Sent Successfully'
//         })
//       }, (error) => {
//         console.log(error.text);
//         Swal.fire({
//           icon: 'error',
//           title: 'Ooops, something went wrong',
//           text: error.text,
//         })
//       });
//     e.target.reset()
//   };
// return (
//     <div className='contact'>
//       <Form onSubmit={handleOnSubmit}>
//         <Form.Field
//           id='form-input-control-email'
//           control={Input}
//           label='Email'
//           name='from_name'
//           placeholder='Email…'
//           required
//           icon='mail'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-input-control-last-name'
//           control={Input}
//           label='Name'
//           name='user_name'
//           placeholder='Name…'
//           required
//           icon='user circle'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-textarea-control-opinion'
//           control={TextArea}
//           label='Message'
//           name='user_message'
//           placeholder='Message…'
//           required
//         />
//         <button type='submit' >Submit</button>
//       </Form>
//     </div>
//   );
// }
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
        Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully, we will get back to you shortly'
          })
    }, (error) => {
        console.log(error.text);
        Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
    });
};
return (
  <div className='contact'>
    <br/>
      <br/>
      <br/>
      <h2 className="main-title text-center">Get In Touch <span className="blue">With Us</span></h2>
    <form  className='cont' ref={form} onSubmit={sendEmail} method= 'post' >
      <label>Name:</label>
      <input type="text" name="user_name" required/>
      <br />
      <label>Email:</label>
      <input type="email" name="user_email" required/>
      <br />
      <label>Phone Number:</label>
      <input type="Number" minLength={3} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="phone_number" required/>
      <br />
      <label>Message:</label>
      <br />
      <textarea name="message" />
      <br />
      <br/>
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}
export default Contactone;

