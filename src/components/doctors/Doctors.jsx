import './Doctors.css'
import FirstDoctor from "../../assets/images/FirstDoctor.png"
import SecondDoctor from "../../assets/images/SecondDoctor.png"
import ThirdDoctor from "../../assets/images/ThirdDoctor.png"
import Socials from "../../assets/icons/Socials.svg"
import ProgressBar from "../../assets/icons/ProgressBar.svg"



const Doctors = () => {
    return (
        <div className="doctors-section">
            <div className="doctors-heading">
                <h3>TRUSTED CARE</h3>
                <h1>Our Medical Experts</h1>
            </div>
            <div className="doctors-cards">
                <div className="card">
                    <img src={FirstDoctor} alt="First-doctor" />
                    <h4>Dr. Grace Smith</h4>
                    <h3>CARDIOLOGIST</h3>
                    <img className="Socials-icons" src={Socials} alt="Socials" />
                    <p>View Profile</p>
                </div>
                <div className="card">
                    <img src={SecondDoctor} alt="Second-doctor" />
                    <h4>Dr. Mira OLamide</h4>
                    <h3>GYNAECOLOGIST</h3>
                    <img className="Socials-icons" src={Socials} alt="Socials" />
                    <p>View Profile</p>
                </div>
                <div className="card">
                    <img src={ThirdDoctor} alt="Third-doctor" />
                    <h4>Dr. Salam Bello</h4>
                    <h3>NEUROLOGIST</h3>
                    <div className="socials-icons">
                        <img src={Socials} alt="Socials" />
                    </div>
                    <p>View Profile</p>
                </div>
            </div>
            <img src={ProgressBar} alt="Progress-bar" />
        </div>
    )
}

export default Doctors