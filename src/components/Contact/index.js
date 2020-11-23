import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';
import phone from '../../assets/images/phone.jpg'

//email js
import emailjs from 'emailjs-com';

function ContactForm(){
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const{ name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const [successMessage, setSuccessMesage] = useState('');

    function handleChange(e){

        if(e.target.name === 'email'){
            const isValid= validateEmail(e.target.value)
            // console.log(isValid)
            if(!isValid){
                setErrorMessage('Your email is invalid');
            }else{
                setErrorMessage('')
            }
        }else{
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`);
            }else{
                setErrorMessage('')
            }
        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(event){

        console.log('buttonpress');
        event.preventDefault();
        console.log(formState)
        const serviceId = 'service_tyix8du'
        const templateId = 'portfolio_template'
        const userId = 'user_n0ZXlyXiFHLSvNhfhMQHr'

        //email js function
        emailjs.sendForm(serviceId , templateId, event.target, userId)
        .then((result)=>{
            console.log(result.text)
            
                
                setSuccessMesage('Your inquiry was received.  Check email for verification.')
    
            
            
            
        },(error)=>{
            console.log(error.text)
        })
        


    }


    return(
        <section className="paper container flex-row border" id="form-container" >
            <div className="sm-12 md-5 col paper border" id="form-div">
                <h2>Contact Me</h2>
                <p>Phone: <a href="tel:9254959681"> (925)495-9681</a></p>
                <p>Email:<a href = "mailto: n.dino90@gmail.com"> n.dino90@gmail.com</a> </p>
                
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group col ">
                        <label htmlFor="name" >Name</label>
                        <input type="text" id="name" name="name" defaultValue={name} onBlur={handleChange} placeholder="Your Name"/>
                    </div>
                    <div className="form-group col ">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"defaultValue={email} onBlur={handleChange} placeholder="youremail@gmail.com"/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="message">Message</label>
                        <textarea id="Message" rows="5" name="message"  defaultValue={message} onBlur={handleChange} placeholder="How can I help you?"></textarea>
                    </div>
                    {errorMessage&&(
                        <div>
                            <p className="error-text text-danger">{errorMessage}</p>
                        </div>
                    )}
                    {successMessage&&(
                        <div>
                            <p className="text-success">{successMessage}</p>
                        </div>
                    )}
                    <div id="btn-div">
                    <button id="button" className="btn-large" type="submit" value="Send" />
                    </div>
                </form>
            </div>
            <div className="col">
                <a href="tel:9254959681"><img src={phone} alt="an old cell phone" className="paper border" id="contact-img"/></a>

            </div>
        
        </section>
        )
}

export default ContactForm;