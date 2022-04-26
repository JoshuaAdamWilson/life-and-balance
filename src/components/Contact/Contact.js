import React from 'react';
import './Contact.css';
import Dragonfly from '../images/dragonfly.png'

const Contact = () => {
    return (
        <div className='contact'>
            <img 
                src={Dragonfly}
                alt="dragonfly logo"
            />
            <h2>Hello!</h2>
            <p>
                Thank you for stopping by and we all hope your mental health is the 
                best you can make it.
            </p>
            <p>
                For business inquiries, collaborations, comments, questions,
                suggestions, and anything else, feel free to send us an email at:
            </p>
            <h4>
                lifeinbalance@family3f1s.com
            </h4>
            <p>
                We will do our best to get back to you when we can!
            </p>
        </div>
    )
}

export default Contact;