import './Topheader.css';
import Logo from '../../assets/icons/Logo.svg'
import Phone from '../../assets/icons/Phone.svg'
import Time from '../../assets/icons/Time.svg'
import Location from '../../assets/icons/Location.svg'

export const Topheader = () => {
    return (
        <div className="top-header">
            <div className="container top-header-container">
                <div className="top-header-left">
                    <img src={Logo} alt="Medtrust Logo" className="logo" />
                </div>
            </div>
            <div className="top-header-right">
                <div className="header-item">
                    <img src={Phone} alt="Phone" className="header-icon" />
                    <div>
                        <h4>EMERGENCY</h4>
                        <p>+2347085071096</p>
                    </div>
                </div>

                <div className="header-item">
                    <img src={Time} alt="Time" className="header-icon" />
                    <div>
                        <h4>WORK HOUR</h4>
                        <p>24 Hours Everyday</p>
                    </div>
                </div>

                <div className="header-item">
                    <img src={Location} alt="Location" className="header-icon" />
                    <div>
                        <div>LOCATION</div>
                        <p>Lagos Nigeria</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topheader;