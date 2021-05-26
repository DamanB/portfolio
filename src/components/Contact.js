import '../styles/contact.css'
import Icon_Email from '../assets/icons/email.svg'
import Icon_GitHub from '../assets/icons/github.svg'
import Icon_LinkedIn from '../assets/icons/linkedin.svg'

const Contact = () => {
    return (<div id="contact" className="contact">
        <h2>Contact</h2>
        <div className="contact-content">
            <div className="contact-info">
                <img src={Icon_Email} alt="My Email Address" className="contact_icon" />
                <a href="mailto: bharajdaman@gmail.com">bharajdaman@gmail.com</a>
            </div>
            <div className="contact-info">
                <img src={Icon_GitHub} alt="My GitHub Account" className="contact_icon" />
                <a href="https://github.com/DamanB" target="_blank" rel="noopener noreferrer">https://github.com/DamanB</a>
            </div>
            <div className="contact-info">
                <img src={Icon_LinkedIn} alt="My LinkedIn Account" className="contact_icon" />
                <a href="https://www.linkedin.com/in/damanveer-bharaj" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/damanveer-bharaj</a>
            </div>

        </div>
    </div>);
}

export default Contact;