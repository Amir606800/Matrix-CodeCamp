import React, { Component } from 'react'
import './assets/CSS/footer.css'
import logoImage from './assets/Images/logo-1.png' 


export class Footer extends Component {
  render() {
    return (
      <>
      <div className="footer d-flex flex-column gap-4 align-items-center position-relative">
        
        <div className="polygon position-absolute ">
            <i class="fa fa-long-arrow-up"></i>
        </div>
        <div className="content">
            <div className="logo-footer">
                <span></span>
                <img src={logoImage} />
                <span></span>
            </div>
            
        <p id='c-email'>live@example.com</p>
        <p id='c-phone'>+999 22 33 555</p>
        <div className="icons d-flex gap-3">
            <i className='fab fa-instagram'></i>
            <i className='fab fa-dribbble'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-youtube'></i>
        </div>

        <form id='footer-form'>
            <input type="text" placeholder='Enter email here...' />
            <button>Subscribe</button>
        </form>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Shop</li>
            <li>Contact</li>
        </ul>
        
        </div>
        
        <div className="last">
        Copyright <i class="fa-regular fa-copyright"></i> 2024 <span style={{color:'red'}}>Bookapp</span>. All Rights Reserved
        </div>
      </div>
      </>
    )
  }
}

export default Footer