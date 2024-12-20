import React, { Component } from 'react'
import "./assets/CSS/products.css"


export class Products extends Component {
  constructor(props){
    super(props)
    this.productList = [
      {
        id:1,
        className:"cards",
        image:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-13.png",
        subTitle:"Cleaner",
        title:"Town cleaner",
        creatorImage:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-1.jpg",
        creatorName:"Ford Henry",
        location:"Town, Road: 1285, Canda",
        prices:[200,340],

      },
      {
        id:2,
        className:"cards",
        image:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-14.png",
        subTitle:"Wall Shop",
        title:"Tower Wall Shop",
        creatorImage:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-2.jpg",
        creatorName:"John Cena",
        location:"City tower, Road: 1285, USA",
        prices:[270,520],
        
      },
      {
        id:3,
        className:"cards",
        image:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-15.png",
        subTitle:"Engineer",
        title:"City Tower Engineer community",
        creatorImage:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-3.jpg",
        creatorName:"Scarlet Johanson",
        location:"Paris, Road: 34, France",
        prices:[100,200],
        
      },
      {
        id:4,
        className:"cards",
        image:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-16.png",
        subTitle:"Barber Shop",
        title:"City Tower Barber Shop",
        creatorImage:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-4.jpg",
        creatorName:"Robert Downey Junior",
        location:"Rome, Stenford st., Italy",
        prices:[400,440],
        
      },
      {
        id:5,
        className:"cards",
        image:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-17.png",
        subTitle:"Barber Shop",
        title:"City Tower Barber Shop",
        creatorImage:"https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-5.jpg",
        creatorName:"Johnny Depp",
        location:"City tower, Azerbaijan",
        prices:[220,540],
        
      }
    ];
    this.state = {
      count:0
    }
    
  }

  prev = ()=>{
    if(this.state.count>0){
      this.setState((prevState)=>({
        count:prevState.count-1
      }))
    }else{
      this.setState({
        count:this.productList.length-1
      })
    }
    
  }
  next = ()=>{
    if(this.state.count<this.productList.length-1){
      this.setState((prevState)=>({
        count:prevState.count+1
      }))
    }else{
      this.setState({
        count:0
      })
    }
  }

  render() {
    return (
      <>
        <div className="glider mb-5">
          
          <div className="container">
          <button onClick={this.prev} className="prev control-buttons">
          {'<'}
          </button>
          <div className="toplum">

            {this.productList.map((item,index)=>(
              <div key={index} className={`cards ${index == this.state.count ? 'd-flex' : 'd-none'}`}>
              <img className='job-image' src={item.image} alt="" />
              <div className="content">
                <div className="subtitle">{item.subTitle}</div>
                <div className="title">{item.title}</div>
                <div className="creator">
                  <img src={item.creatorImage} alt="" />
                  By {item.creatorName}
                </div>
                <div className="locat">
                <i className="fa-solid fa-location-dot"></i> {item.location}
                </div>
                <div className="price d-flex gap-2"><span>${item.prices[0]}</span><span>${item.prices[1]}</span></div>
                <button className="btn-book">Book Now</button>
                <div className="heart"><button>&#9825;</button></div>
              </div>
          </div>
            ))}
            </div>
            <button onClick={this.next} className="next control-buttons">
            {'>'}
            </button>
          </div>
        </div>
      </>
    )
  }
}
