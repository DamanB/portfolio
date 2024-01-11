import '../styles/aboutme.css'
import avatar from '../assets/img/avatar.png'

const AboutMe = () => {
    return ( 
        <div className="aboutMe">
            <div className="content">
                <h2 className="ft-medium">About <span>Me</span></h2>
                <p className="ft-bold">Hello! My name is Damanveer Bharaj. I received my Software Engineering (B.Eng) degree from York University in 2021, where I began my journey developing enterprise level systems.</p>
                <p className="ft-normal">I am a passionate programmer with an interest in creating software solutions to real world problems. As a developer, I have experience working on a range of projects including dynamic web apps, relational databases, mobile applications, and interactive games. Below you can find a portfolio showcasing some of these projects. Feel free to check them out!  </p>
            </div>
            <img src={avatar} alt="hello" />
        </div>

     );
}
 
export default AboutMe;