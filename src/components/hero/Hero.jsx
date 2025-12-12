

import './Hero.css';
import HeroDoctor from '../../assets/images/HeroDoctor.png'
import Calendar from '../../assets/icons/Calendar.svg'
import Team from '../../assets/icons/Team.svg'
import Emergency from '../../assets/icons/Emergency.svg'


export const Hero = () => {
    return (
        <section>
            <div className="left-section">
                <p>YOUR HEALTH, OUR PRIORITY</p>
                <h1>Setting The Standard in Medical Excellence</h1>
                <button>Our Services</button>
            </div>
            <div className="right-section">
                <img src={HeroDoctor} alt="Hero-doctor" />
            </div>

            <div className="hero-cards">
                <div className="hero-card1">
                    <h3>Book an Appointment</h3>
                    <img src={Calendar} alt="Appointment-card" />
                </div>
                <div className="hero-card2">
                    <h3>Find a Doctor</h3>
                    <img src={Team} alt="Doctor-card" />
                </div>
                <div className="hero-card3">
                    <h3>Emergency Care</h3>
                    <img src={Emergency} alt="Emergency-card" />
                </div>
            </div>
        </section>
    )
}

export default Hero










