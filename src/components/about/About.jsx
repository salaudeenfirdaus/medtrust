import './About.css'
import AboutImage from "../../assets/images/AboutImage.png"
import Learnmore from "../../assets/images/Learnmore.png"

const About = () => {
    return (
        <div className="about-section">
            <div className="top-section">
                <h3>WELCOME TO MEDTRUST</h3>
                <h1>Your Trusted Partner in Quality Healthcare</h1>
                <p>At MedTrust, we are committed to providing exceptional medical care with compassion, expertise, and integrity.
                    Our team of highly trusted specialists are here to ensure you receive the best possible treatment and support you deserve.
                    your well-being remains at the heart of everything we do.</p>
                <div className="learnmore">
                    <img src={Learnmore} alt="Learnmore" />
                </div>
            </div>
            <div className="down-section">
                <img src={AboutImage} alt="About-image" />
            </div>
        </div>
    )
}

export default About