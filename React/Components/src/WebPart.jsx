import React, { Component } from 'react'
import "./assets/CSS/Web.css"
import { MdCancel } from "react-icons/md";
import { FaStar } from "react-icons/fa6";


export class WebPart extends Component {
    constructor(){
        super()
        this.state={
            products:[],
            categories:[],
            activeCat:"",
            activeStat:"d-none",
            selectedItem : []
        }
    }

    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>{          
            this.setState({
                products:data
            })          
        });
        fetch("https://fakestoreapi.com/products/categories")
        .then(res=>res.json())
        .then(cat=>{
            this.setState({
                categories:[...cat,"All"]
            })
        })
    }

    Chose =(e)=>{
        this.setState({
            activeCat:e.target.innerHTML
        })    
    }

    showProduct=(item)=>{
        this.setState({
            selectedItem:[item],
            activeStat:"d-flex"
        })
    };
    close=()=>{
        this.setState({
            activeStat:"d-none"
        })
    }
  render() {
    let filtered = this.state.products.filter(item=> item.category == this.state.activeCat)
    
    return (
      <>
      
        <div className="main container ">
            <div className="categories">
                {this.state.categories.map((item,i)=>(
                    <button key={i} onClick={this.Chose} className="box">{item}</button>
                ))}
            </div>
            
            <div className="list ">
                
                <ul className='product-list'>
                    
                   {this.state.activeCat == "All" 
                   ? this.state.products.map((item,index)=>
                    <li onClick={() => this.showProduct(item)} key={index}>
                        <img src={item.image} alt="" />
                        <div className="category">{item.category}</div>
                        <div className="title">{item.title}</div>
                        <div className="desc">{item.description}</div>
                        <div className="feat">
                            <div className="price">$ {item.price}</div>
                            <div className="rate">({item.rating.rate})<FaStar /></div>
                        </div>
                    </li>
                   )
                   : filtered.map((item,index)=>
                    <li onClick={() => this.showProduct(item)} key={index}>
                        <img src={item.image} alt="" />
                        <div className="category">{item.category}</div>
                        <div className="title">{item.title}</div>
                        <div className="desc">{item.description}</div>
                        <div className="feat">
                            <div className="price">$ {item.price}</div>
                            <div className="rate">({item.rating.rate})<FaStar /></div>
                        </div>
                    </li>
                   ) }

                </ul>
                
            </div>
          
        </div>
        
        <div className={`display ${this.state.activeStat}` } >
        {this.state.selectedItem.map((item)=>
        <>
            <div onClick={this.close} className="cancel"><MdCancel /></div>
            <img src={item.image} alt="" /> 
            <div className="rate">{item.rating.rate}</div>
            <div className="title">{item.title}</div>
            <div className="desc">{item.description}</div>  
            <div className="feat">
                <div className="price">${item.price}</div>
                <div className="stock">Stock: {item.rating.count}</div>
            </div>
        </>
        )}
            
        </div>
        <div className={`grad ${this.state.activeStat}` }></div>
      </>
      
    )
  }
}

export default WebPart