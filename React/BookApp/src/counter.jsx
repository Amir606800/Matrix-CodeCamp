import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './assets/CSS/counter.css'
import Swal from 'sweetalert2';


export class Counter extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  decrease = ()=>{
    if (this.state.count === 0) {
      Swal.fire({
        title: 'Amir says',  // Custom title
        text: 'You cannot subtract from 0',  // Custom message
        icon: 'warning',
        confirmButtonText: 'Alright man, whatever'
      });
    } else {
      this.setState((prevState) => ({
        count: prevState.count - 1
      }));
    }
  }

  increase = ()=>{
    this.setState((prevState)=>({
      count:prevState.count+1
    }))
  }
  render() {
    return (
        <>
        <div className="counter">
          <div className="container">
            <Link to="/" style={{textDecoration:'none',color: 'white',fontWeight:'700'}}>Home</Link>
            <div className="main-place">
              <button onClick={this.decrease}>-</button>
              <div className="screen">{this.state.count}</div>
              <button onClick={this.increase}>+</button>
            </div>
          </div>
        </div>
        </>
      
    )
  }
}
