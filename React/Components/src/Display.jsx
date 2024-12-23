import React, { Component } from 'react'
import { MdCancel } from "react-icons/md";


export class Display extends Component {
    constructor(){
        super()
    }


  render() {
    return (
      <>
      <div className="display">
            <div  className="cancel"><MdCancel /></div>
            <img src="" alt="" /> 
            <div className="rate"></div>
            <div className="title"></div>
            <div className="desc"></div>  
            <div className="feat">
                <div className="price"></div>
                <div className="stock"></div>
            </div>
        </div>
        <div className="grad"></div>
      </>
    )
  }
}

