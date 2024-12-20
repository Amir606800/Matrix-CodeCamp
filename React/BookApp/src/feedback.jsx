import React, { Component } from 'react'
import './assets/CSS/feedback.css'
export class Feedback extends Component {
  render() {
    return (
      <>
        <div className='FeedBack'>
          <div className="container">
            <div className="review">
              <div className="creator">
                <div className="info">
                  <img src={this.props.img} alt="" />
                  <div className="creator-info">
                    <div className="creator-name">{this.props.creatorName}</div>
                    <div className="rating-icon">* * * * * (4.5)</div>
                    <div className="verification">{this.props.verfication}</div>
                  </div>
                </div>
                <div className="location">
                  <p><i className="fa-solid fa-location-dot"></i>   {this.props.location}</p>
                  <p><i className="fa-sharp-duotone fa-regular fa-clock"></i>   {this.props.time}</p>
                </div>
              </div>
              <div className="content">
                <div className="title">{this.props.title}</div>
                <div className="desc">
                {this.props.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      
    )
  }
}

export class Feedbacks extends Component{
  constructor(props){
    super(props)
    this.feedDatas = [
      {
          img: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-4.jpg",
          creatorName: "Alex Johnson",
          location: "New York, USA",
          time: "5 Days Ago",
          title: "Outstanding Quality!",
          desc: `
              The product exceeded my expectations. The build quality is top-notch, and delivery was super quick. 
              It felt like the company really cares about their customers. The attention to detail in the packaging 
              and the product itself was remarkable. The instructions were clear and easy to follow, which made the setup 
              process a breeze. The product itself works flawlessly, and I could see the difference it made immediately. 
              I am genuinely impressed with how well it functions, and I’ve already recommended it to several friends. 
              Highly recommended to anyone looking for a high-quality, reliable product!`,
          verState:``
      },
      {
          img: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-5.jpg",
          creatorName: "Maria Gonzalez",
          location: "Madrid, Spain",
          time: "2 Weeks Ago",
          title: "Good, but Room for Improvement",
          desc: `
              Overall, a decent experience. The product works as advertised, but the packaging could have been better. 
              The material felt slightly less durable than expected, and there were a few scuff marks on the surface when 
              it arrived. However, the product’s functionality is not compromised, and it still performs well. 
              The customer service was responsive, but it could be quicker in handling queries. I had to follow up a few 
              times before receiving an answer. The item works as it should, but I would have expected a better overall 
              experience considering the price.`,
          verState:`☑ Verified `
      },
      {
          img: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-2.jpg",
          creatorName: "Sophie Chen",
          location: "Beijing, China",
          time: "3 Days Ago",
          title: "Simply Amazing!",
          desc: `
              The customer service team was incredibly helpful when I had a question. They resolved my issue in no time. 
              The product itself was of superior quality, and it perfectly met my needs. I also appreciated the follow-up 
              email to ensure my satisfaction, which shows that the company cares about its customers. The design is sleek 
              and modern, and it fits seamlessly into my home. I was also pleasantly surprised by the additional features 
              that weren't mentioned in the product description. It's rare to find such a high level of customer care, 
              and it makes me more likely to shop here again in the future. Would definitely recommend this product to others!`,
          verState:`☑ Verified `
      },
      {
          img: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-3.jpg",
          creatorName: "Liam O'Connor",
          location: "Dublin, Ireland",
          time: "2 Months Ago",
          title: "Not Satisfied",
          desc: `
              Unfortunately, the item didn’t match the description. It was smaller than advertised, and it lacked some 
              features that were promised, such as adjustable settings and higher durability. I contacted support, but the 
              response time was slow, and I had to repeat my issue multiple times before receiving assistance. Though they 
              eventually provided a partial refund, the overall experience was disappointing. The product wasn’t exactly 
              what I was looking for, and it didn't meet my expectations based on the promotional material. While I appreciate 
              the refund, I would have preferred a smoother experience. Hopefully, this improves in the future.`,
          verState:` `
      },
      {
          img: "https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-1.jpg",
          creatorName: "Ahmed Al-Farsi",
          location: "Dubai, UAE",
          time: "1 Month Ago",
          title: "Exceptional Service!",
          desc: `
              The customer service team was incredibly helpful when I had a question. They resolved my issue in no time. 
              The product itself was of superior quality, and it perfectly met my needs. I also appreciated the follow-up 
              email to ensure my satisfaction, which shows that the company cares about its customers. The design is sleek 
              and modern, and it fits seamlessly into my home. I was also pleasantly surprised by the additional features 
              that weren't mentioned in the product description. It's rare to find such a high level of customer care, 
              and it makes me more likely to shop here again in the future. Would definitely recommend this product to others!`,
          verState:`☑ Verified `
      }
  ]
  }
  render(){
    return(
      <>
      {this.feedDatas.map((item)=>(
        <Feedback 
        img={item.img}
        creatorName={item.creatorName}
        location={item.location}
        time={item.time}
        title={item.title}
        desc={item.desc}
        verfication={item.verState}
        />
      ))}
    </>
    )
  }
}
