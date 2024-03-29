import '../styles/Navbar.css'
import hiltilogo from '../assets/Hilti-Logo.jpg'
import userlogo from '../assets/user-profile.jpg'
function Navbar() {
return (
    <>
    <nav className="navbar">
        <div className="nav-logo-div"><img src={hiltilogo} className="brand-logo"/></div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Profile</li>
            <li>Digital Interview</li>
            <li>Application Record</li>
            <li>Support</li>
        </ul>
        <div className="nav-profile"><img src={userlogo} className="profile-logo"/></div>
    </nav>
    </>
);
}

export default Navbar;