import '../styles/aboutme.css'
import avatar from '../assets/img/avatar.png'

const AboutMe = () => {
    return ( 
        <div className="aboutMe">
            <div className="content">
                <h2 className="ft-medium">About <span>Me</span></h2>
                <p className="ft-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque debitis ad omnis doloremque, officiis tempora natus laudantium enim, dicta delectus quam? Necessitatibus, temporibus similique. Sapiente, consequuntur architecto. Fuga, modi!</p>
                <p className="ft-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veritatis ducimus consequuntur eos, excepturi similique! Dolores dolore explicabo facere modi quia at ipsa aperiam repudiandae alias ipsum eligendi veniam eveniet voluptas reprehenderit nobis sunt provident, iste ab laborum ut, suscipit culpa quasi minima facilis. Ipsam eius commodi corrupti atque laborum facilis perspiciatis ratione cupiditate libero, earum.</p>
            </div>
            <img src={avatar} alt="hello" />
        </div>

     );
}
 
export default AboutMe;