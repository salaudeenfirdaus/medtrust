import './services.css'
import FirstcardImage from "../../assets/images/FirstcardImage.png"
import SecondcardImage from "../../assets/images/SecondcardImage.png"
import ThirdcardImage from "../../assets/images/ThirdcardImage.png"
import FourthcardImage from "../../assets/images/FourthcardImage.png"
import FifthcardImage from "../../assets/images/FifthcardImage.png"
import SixthcardImage from "../../assets/images/SixthcardImage.png"



const Services = () => {
    return (
        <div className="services-section">
            <div className="services-heading">
                <h3>CARE YOU CAN BELIEVE IN</h3>
                <h1>Our Services</h1>
            </div>
            <div className="services-cards">
                <div className="upper-cards-row">
                    <div className="services-card">
                        <img src={FirstcardImage} alt="First-card" />
                        <h3>General Healthcare</h3>
                        <p>Comprehensive medical care for individuals and families, covering routine checkups, consultations, and preventive treatments.</p>
                    </div>
                    <div className="services-card">
                        <img src={SecondcardImage} alt="Second-card" />
                        <h3>Laboratory Service</h3>
                        <p>Accurate diagnostic testing with modern equipment to support quick and effective treatment decisions</p>
                    </div>
                    <div className="services-card">
                        <img src={ThirdcardImage} alt="Third-card" />
                        <h3>Pharmacy</h3>
                        <p>Access to quality medications and professional guidance to support your treatment and recovery</p>
                    </div>
                    <div className="lower-cards-row">
                        <div className="services-card">
                            <img src={FourthcardImage} alt="Fourth-card" />
                            <h3>Ambulance Services</h3>
                            <p>Fast and reliable emergency transportation available 24/7 to ensure timely medical attention</p>
                        </div>
                        <div className="services-card">
                            <img src={FifthcardImage} alt="Fifth-card" />
                            <h3>Radiology & Imaging</h3>
                            <p>Advanced imaing services including X-rays, ultrasounds, and scans for precise diagnosis and monitoring </p>
                        </div>
                        <div className="services-card">
                            <img src={SixthcardImage} alt="Sixth-card" />
                            <h3>Specialist Consultaion</h3>
                            <p>Expert care from trained specialists across multiple fields to help manage complex health conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services