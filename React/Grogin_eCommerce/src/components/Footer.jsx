import { MdOutlineMail } from "react-icons/md"
import "../assets/CSS/footer.css"
import { LuPhoneCall } from "react-icons/lu"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti"

const Footer = () => {
  return (
    <>
        <div className="Footer w-100">
            <div className="top  d-flex justify-content-between">
                <div className="join "><h3 className="fw-bold ">Join our newsletter for $10 offs</h3> <p>Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!</p></div>
                <div className="yazilar ">
                    <div className="email-footer position-relative">
                        <input className="rounded-3" type="email" name="email" id="email-foot" placeholder={`Enter your email address`} />
                        <button className="btn custom-violet btn position-absolute top-0 end-0">SEND</button>
                    </div>
                    <p>By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
                </div>
                
            </div>
            <hr />

            <div className="mid d-flex">
                <div className="col1  w-25">
                    <div className="head">Do you need Help?</div>
                    <div className="content d-flex flex-column gap-4">
                        <div className="auto-design w-75">Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</div>
                        <div className="phone d-flex flex-row gap-2">
                            <LuPhoneCall className="foot-icons" />
                            <div className="d-flex flex-column"><span>Monday-Friday: 08am-9pm </span><span className="fw-bolder fs-4">0 800 300-353</span></div>
                        </div>
                        <div className="email d-flex flex-row gap-2">
                            <MdOutlineMail className="foot-icons" />
                            <div className="d-flex flex-column"><span>Need help with your order?</span><span className="fw-bold fs-6">info@example.com</span></div>
                        </div>
                        
                    </div>
                </div>
                <div className="col">
                <div className="row">
                <div className="col">
                <div className="head">Make Money with Us</div>
                    <ul className="list-unstyled">
                        <li>Sell on Grogin</li>
                        <li>Sell Your Services on Grogin</li>
                        <li>Sell on Grogin Business</li>
                        <li>Sell Your Apps on Grogin</li>
                        <li>Become an Affilate</li>
                        <li>Advertise Your Products</li>
                        <li>Sell-Publish with Us</li>
                        <li>Become an Blowwe Vendor</li>
                    </ul>
                </div>
                <div className="col">
                <div className="head">Let Us Help You</div>
                    <ul className="list-unstyled">
                        <li>Accessibility Statement</li>
                        <li>Your Orders</li>
                        <li>Returns & Replacements</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Refund and Returns Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Cookie Settings</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className="col">
                <div className="head">Get to Know Us</div>
                    <ul className=" list-unstyled">
                        <li>Careers for Grogin</li>
                        <li>About Grogin</li>
                        <li>Inverstor Relations</li>
                        <li>Grogin Devices</li>
                        <li>Customer reviews</li>
                        <li>Social Responsibility</li>
                        <li>Store Locations</li>
                    </ul>
                </div>

                <div className="col  d-flex flex-column gap-1">
                    <div className="head">Download our app</div>
                    <div className="play-store d-flex align-items-center">
                        <img src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/google-play-button-dark.png" alt="Play-Store" />
                        <p>Download App Get <p>-10% Discount</p></p>
                    </div>
                    <div className="app-store d-flex align-items-center">
                        <img src="https://klbtheme.com/grogin/wp-content/uploads/2023/10/apple-store-button-dark.png" alt="App-Store" />
                        <p>Download App Get <p>-10% Discount</p></p>
                    </div>
                    <div className="social">
                        <div className="follow">Follow us on social media:</div>
                        <div className="apps">
                            <TiSocialFacebook className="social-icons text-primary face" />
                            <TiSocialTwitter className="social-icons text-info twit" />
                            <FaInstagram  className="social-icons text-danger insta" />
                            <TiSocialLinkedin className="social-icons text-primary link" />
                        </div>
                    </div>
                </div>
                </div>
                </div>
                
            </div>
            <hr />

            <div className="botom d-flex justify-content-between">
                <div className="left d-flex dlex-column align-items-start">
                    <p>Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by KLBTheme.</p>
                    
                </div>
                <div className="right">
                Terms and Conditions Privacy Policy Order Tracking
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer