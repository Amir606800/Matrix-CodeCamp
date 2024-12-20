import React, { Component } from 'react'
import "./assets/CSS/services.css"

let count = 0;

export class Services extends Component {
    constructor(props){
        super(props)
        this.photos = {
            photo1:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-4.jpg",
            photo2:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-1.jpg",
            photo3:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-2.jpg",
            photo4:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-3.jpg"
        }
        this.state = {
            url:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-4.jpg"
        }
    }
    photo = ()=>{
        const keys = Object.keys(this.photos);
        
        if(count<(keys.length-1)){
            count++;   
        }else{
            count = 0;
        }
        const randomPhoto = this.photos[keys[count]]
            this.setState({
                url:randomPhoto
            });
        
    }
  render() {
    return (
        <>
      <div className='Services'>
        <div className="container">
            <div className="slider">
                <button onClick={this.photo} className="prev control-buttons">
                {'<'}
                </button>
                <div className="gallery">
                    <img src={this.state.url} alt="" />
                </div>
                <button onClick={this.photo} className="next control-buttons">
                {'>'}
                </button>
            </div>
            <div className="content">
                <div className="title">
                    <p>Barber Services</p>
                    <h2>Men's Haircuts And Hair Styles</h2>
                    <p>&#x1F4CD; Tokyo city tower, Road No:1280, Housing Apartment, Japan</p>
                </div>
                <div className="creator">
                    <span className='prices'>$150.00<span>$200.00</span></span>
                    <div className="creatorInfo">
                        <img src="https://themeforest.kreativdev.com/bookapp/demo/assets/images/vendor/shop-14.png" alt="" />
                        <span>
                            <p id='creator-name'>By Jonathan Doe</p>
                            <p id='stars'>&#11088; &#11088; &#x2606; &#x2606; &#x2606; </p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="title">
                Service Description
                </div>
                
                <div className="text">
                Get Barbers at your doorstep now on your demand as per your required time and date. Trim your regular hairstyle or get a new look with a new style from the catalog. Even if you are too busy in the office and have a meeting to attend, why not get the job done in the office itself!! Choose a regular scissor cut or ask for a trimmer cut, any style you want is just a tap away!
                <br />
                <br />
                Praesent lectus facilisi tempor ridiculus arcu pharetra non tellus. Torquent nisl tempori amader Magnis mollis lobortis nam, montes ut, consequat sed amet nullam.
                </div>
                <div className="title">
                    Service Description
                </div>
                <ul>
                    <li><b>Service Booking:</b> 3 hours before service delivery</li>
                    <li><b>Service Duration:</b> 40 minutes (can be extended up to 10 minutes)</li>
                    <li><b>Service Aviabilty:</b> 9 am to 7 pm</li>
                </ul>
                <div className="title">
                    Service Features
                </div>
                <div className="text">
                    <i className="fa-solid fa-square-check" ></i> 100% Secure Services
                    <i className="fa-solid fa-square-check" ></i> 100% Secure Services
                    <i className="fa-solid fa-square-check" ></i> 100% Secure Services
                    <i className="fa-solid fa-square-check" ></i> 100% Secure Services
                </div>
            </div>
            <div className="book">
                <div className="want"><b>Do You Want to Book Men's Haircut And Hair Style Services?</b></div>
                <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                    <p>
                        Your Location
                        <p>Madrid</p>
                    </p>
                </div>
                <button className='log'>
                    
                <i className="fa-solid fa-magnifying-glass"></i> <span>Book Now</span>
                </button>
            </div>
        </div>
      </div>
      </>
    )
  }
}
