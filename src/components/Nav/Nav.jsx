import { useState } from "react";
import  {Link}  from "react-router-dom";
import  "./Nav.css"

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
        <nav>
            <div className="nav-info">
                <div className="logo">
                    <p>chris.</p>
                </div>
                <ul className={`links ${isOpen? 'open-links' : ''}`}>
                    <li className='about'>
                       <Link to="">About</Link>
                    </li>
                    <li className='skills'>
                        <Link to="">Skills</Link>
                    </li>
                    <li className='projects'>
                        <Link to="">Projects</Link>
                    </li>
                    <li className='contact'>
                        <Link to="">Contact</Link>
                    </li>
                </ul>
                <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu} >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

        </nav>
    </>
  )
}
