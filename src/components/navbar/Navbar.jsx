import './Navbar.css';


export const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            {/* links */}
            <div className="navbar-left">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#doctors">Doctors</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            {/* button */}
            <div className="navbar-right">
                <button className="nav-button">Book Appointment</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar