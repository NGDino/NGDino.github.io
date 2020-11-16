import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';
import phone from '../../assets/images/phone.jpg'


function ContactForm(){
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const{ name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){

        if(e.target.name === 'email'){
            const isValid= validateEmail(e.target.value)
            console.log(isValid)
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
    }


    return(
        <section className="paper container flex-row border" id="form-container" >
            <div className="sm-12 md-5 col paper border" id="form-div">
                <h2>Contact Me</h2>
                <p>Phone: <a href="tel:9254959681"> (925)495-9681</a></p>
                <p>Email:<a href = "mailto: n.dino90@gmail.com"> n.dino90@gmail.com</a> </p>
                
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group col ">
                        <label htmlFor="name" className="">Name</label>
                        <input type="text" className="" name="name" defaultValue={name} onBlur={handleChange} placeholder="Your Name"/>
                    </div>
                    <div className="form-group col ">
                        <label htmlFor="name">Email</label>
                        <input type="email" defaultValue={email} onBlur={handleChange} placeholder="youremail@gmail.com"/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="message">Message</label>
                        <textarea id="Message" className="" rows="5" name="message" defaultValue={message} onBlur={handleChange} placeholder="How can I help you?"></textarea>
                    </div>
                    {errorMessage&&(
                        <div>
                            <p className="error-text text-danger">{errorMessage}</p>
                        </div>
                    )}
                    <div id="btn-div">
                    <button id="form-btn" type="submit" >Submit</button>
                    </div>
                </form>
            </div>
            <div className="col">
                <img src={phone} alt="an old cell phone" className="paper border" id="contact-img"/>

            </div>
        
        </section>
        )
}

export default ContactForm;