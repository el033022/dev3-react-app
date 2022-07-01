import { StyledNav } from "./styles/Navbar.styled"
import logo from '../images/tnt_logo_white.png';
import { useEffect } from "react";

function Navbar() {
    useEffect(()=>{
        const menuToggle = document.querySelectorAll('.menu-toggle')
        const menuContainer = document.querySelector('.nav-menu-container')
        const stag = document.querySelectorAll('.stag')
        menuToggle.forEach(toggle=>{
            toggle.addEventListener('click',()=>{
                menuContainer.classList.toggle('show')
                stag.forEach(stagger=>{
                    stagger.classList.toggle('stagger')
                })
            })
        })
    },[])
    
    return (
        <StyledNav>
            <div className='nav-container'>
                <div className="nav-item logo">
                    <a href="#"><img src={logo} alt='logo'></img>
                    </a>
                </div>
                <div className="nav-item nav-right">
                    <div className="nav-right-item social">
                        <a href="#"><span className="fab fa-facebook-f"/></a>
                        <a href="#"><span className="fab fa-twitter"/></a>
                        <a href="#"><span className="fab fa-linkedin"/></a>
                    </div>
                    <div className="nav-right-item menu menu-toggle">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>                
            </div>
            <div className='nav-menu-container'>
                <div className='menu-item-container'>
                    <div className='menu-item'>
                        <div className='close menu-toggle'>&times;</div>
                        <div className='menu-link'>
                            <div className='stag' style={{"--index": 0}}><a>Home</a></div>
                            <div className='stag' style={{"--index": 1}}>Competencies</div>
                            <div className='stag' style={{"--index": 2}}>Industries</div>
                            <div className='stag' style={{"--index": 3}}>Insights</div>
                            <div className='stag' style={{"--index": 4}}>Support</div>
                            <div className='stag' style={{"--index": 5}}>About</div>
                            <div className='stag' style={{"--index": 6}}>Careers</div>
                            <div className='stag' style={{"--index": 7}}>Contact</div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledNav>
        
    )
}

export default Navbar