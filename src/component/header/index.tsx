import React, { useState } from 'react'
import styles from "./index.module.css"
import useSticky from '@/hooks/useStickyHook';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from '../container';
import Button from '../button';

// assets
import logo from "@/assets/icons/logo.svg"
import phone from "@/assets/icons/phone.svg"
import inactiveArrowDown from "@/assets/icons/inactive-arrow-down.svg"
import activeArrowDown from "@/assets/icons/active-arrow-down.svg"

const Header: React.FC = () => {
    const { stickyRef, sticky } = useSticky();
    const [active, setActive] = useState(false);
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleClick = () => {
      navigate("/");
      window.location.reload();
    }

    return (
        <React.Fragment>
            <header ref={stickyRef} className={`${styles.header} ${sticky && styles.fixedNav} ${active ? styles.active : ""}`}>
                <Container width='medium' className={styles.container}>
                    <img src={logo} alt="logo" onClick={handleClick} />
                    
                    <nav className={styles.wrapper}>
                        <ul>
                            {navItems.map((item)=>(
                                <li key={item.id}>
                                <Link
                                    to={item.linkTo} 
                                    onClick={()=>setActive(!active)} 
                                    className={location.pathname === item.linkTo ? styles.active_link : ""}
                                    onMouseEnter={() => item.id === 3 && setHovered(true)}
                                    onMouseLeave={() => item.id === 3 && setHovered(false)}
                                >
                                    {item.item}
                                    {item.id === 3 && (
                                        <img src={(location.pathname === "/services" || hovered) ? activeArrowDown : inactiveArrowDown} alt="arrow" />
                                    )} 
                                </Link>
                                </li>
                            ))}
                        </ul>

                        <Button 
                            content={
                                <a href='tel: +2348184441404'>
                                    <img src={phone} alt="phone" />
                                    <p>+234 818 444 1404</p>
                                </a>
                            }
                            className={styles.btn}
                        />
                    </nav>

                    <div className={styles.overlay}></div>

                    <div className={styles.hamburger} onClick={()=> setActive(!active)}>
                        <div className={styles.bar}></div>
                    </div>
                </Container>
            </header>

            <div style={{
                height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
            }} />
        </React.Fragment>
    )
}

export default Header

const navItems = [
    { id: 1, item: "Home", linkTo: "/home" },
    { id: 2, item: "About", linkTo: "/about" },
    { id: 3, item: "Services", linkTo: "/services" },
    { id: 4, item: "Contact", linkTo: "/contact" }
  ]