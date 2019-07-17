import React, { Component } from 'react';
import './App.css';
import classicTee from './images/classic-tee.jpg';

class Home extends Component {
  state = {
      item1: {title: 'Classic Tee', price: '$75.00', image: 'classic-tee.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '},
    //   item2: {title: 'Classic Hoodie', price: '$125.00', image: 'classic-tee.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '},
      numOfItems: 0
    };
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span/>
                <span id="cartHeader" className="navbar-item" onClick={this.shoppingCart}>My Cart ({this.state.numOfItems})</span>
            </nav>
            <div className="container">
                <div id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <img className="itemImages" src={classicTee} alt='Classic Tee'/>
                            </div>
                            <div className="col-sm">
                                <h4 className="itemTitle">{this.state.item1.title}</h4>
                                <hr/>
                                <h6>{this.state.item1.price}</h6>
                                <hr/>
                                <p>{this.state.item1.description}</p>
                               <p>SIZE</p>
                                <p>
                                    <button className="btn btn-light">S</button>
                                    <button className="btn btn-light">M</button>
                                    <button className="btn btn-light">L</button>
                                </p>

                                <button className="btn btn-secondary">ADD TO CART</button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  shoppingCart = () => {
      console.log('Hello');
      let a = this.state.numOfItems;
      a++;
      this.setState({numOfItems: a});
  }

}

export default Home;
