import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { CgShoppingBag } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="Navbar">
            <div className="logo"><img src="https://creativemela.com/themeforest_html/Fresh_Vial/demo/freeshvila/images/logo.png" alt="Logo" /></div>
            <div className="navigation">
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/about"}>About Us</NavLink></li>
                    <li><Link>Car Products</Link></li>
                    <li><Link>Our Pages</Link></li>
                    <li><Link>Latest Blog</Link></li>
                    <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="feats">
                <CgShoppingBag className='feat-icons' />
                <BsSearch className='feat-icons' />
            </div>
        </div>
    </>
  )
}

export default Header