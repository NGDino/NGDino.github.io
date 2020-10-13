import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers'

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
        <section className=" paper container " id="form-container" >
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group ">
                    <label htmlFor="name" className="">Name</label>
                    <input type="text" className="" name="name" defaultValue={name} onBlur={handleChange} placeholder="John Doe"/>
                </div>
                <div className="form-group ">
                    <label htmlFor="name">Email</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} placeholder="youremail@gmail.com"/>
                </div>
                <div className="form-group ">
                    <label htmlFor="message">Message</label>
                    <textarea id="Message" className="" rows="5" name="message" defaultValue={message} onBlur={handleChange} placeholder="How can I help you?"></textarea>
                </div>
                {errorMessage&&(
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" >Submit</button>
            </form>
        
        </section>
        )
}

export default ContactForm;