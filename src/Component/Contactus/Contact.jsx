import React,{useRef} from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
export const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9e30ef26-26cf-4024-9a88-872f0d1ea54b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us message <img src={msg} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Perspiciatis veniam optio,
                 nulla asperiores consequuntur ab sunt beatae 
                 esse iste iusto pariatur accusantium excepturi, 
                 laudantium sit quia, perferendis harum quam 
                 corporis.</p>
                 <ul>
                    <li><img src={mail} alt="" />simple@gmail.com</li>
                    <li><img src={phone} alt="" />91+ 1234567897</li>
                    <li><img src={location} alt="" />Chennai</li>
                 </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label htmlFor="">Phone Number</label>
                <input type="number" name='phone' placeholder='Enter your mobile' required/>
                <label htmlFor="">Write your message</label>
                <textarea name="message" id="" col='20' rows='5' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
