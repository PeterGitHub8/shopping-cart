import React, { Component } from 'react';
import './App.css';
import classicTee from './images/classic-tee.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Home extends Component {
  state = {
      item1: {title: 'Classic Tee', price: '$75.00', image: 'classic-tee.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '},
    //   item2: {title: 'Classic Hoodie', price: '$125.00', image: 'classic-tee.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '},
      numOfItems: 0,
      small: 'btn btn-light',
      medium: 'btn btn-light',
      large: 'btn btn-light',
      selectedButton: '',
      show: false,
      modalHeading: '',
      modalBody: '',
      cart: []
    };
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ml-auto">
                <span/>
                <div className="navbar-text justify-content-end ml-auto">
                    <li  className="navbar-nav ml-auto" onClick={this.shoppingCart}>My Cart ({this.state.numOfItems})</li>
                </div>
            </nav>
            <div className="container">
                <div id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <img className="itemImages" src={classicTee} alt='Classic Tee'/>
                            </div>
                            <div className="col-sm">
                                <p className="itemTitle">{this.state.item1.title}</p>
                                <hr className="seperator"/>
                                <strong className="itemPrice">{this.state.item1.price}</strong>
                                <hr/>
                                <p className="itemDescription">{this.state.item1.description}</p>
                               <p className="sizeLabel">SIZE<span className="star">*</span></p>
                                <p>
                                    <button onClick={this.selectSize} id="s" className={this.state.small}>S</button>
                                    <button onClick={this.selectSize} id="m" className={this.state.medium}>M</button>
                                    <button onClick={this.selectSize} id="l" className={this.state.large}>L</button>
                                </p>
                                <button onClick={this.addToCart} className="btn btn-secondary">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.state.modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
  }
  handleClose = () => {
      this.setState({ show: false });
  }
  handleShow = () => {
    this.setState({ show: true });
  }
  addToCart = () => {
    if(this.state.selectedButton === '') {
        this.setState({ modalHeading: "Warning!", modalBody: "Please select a size" });
        this.handleShow();
    }
    else{
        this.setState({ modalHeading: "Success!", modalBody: "Item has been added" });
        this.handleShow();
        this.setState({ small: 'btn btn-light',  medium: 'btn btn-light', large: 'btn btn-light'});
    }
}
  shoppingCart = () => {
      console.log('Hello');
      let a = this.state.numOfItems;
      a++;
      this.setState({numOfItems: a});
  }
  selectSize = (event) => {
    switch(event.target.id) {
        case 's':
            if (this.state.small === 'btn btn-light active') {
                this.setState({ small: 'btn btn-light', selectedButton: '' });
                this.setState({ medium: 'btn btn-light' });
                this.setState({ large: 'btn btn-light' });
            }
            else {
                this.setState({ small: 'btn btn-light active', selectedButton: 's' });
                this.setState({ medium: 'btn btn-light' });
                this.setState({ large: 'btn btn-light' });
            }
          break;
        case 'm':
            if (this.state.medium === 'btn btn-light active') {
                this.setState({ small: 'btn btn-light'});
                this.setState({ medium: 'btn btn-light' });
                this.setState({ large: 'btn btn-light', selectedButton: '' });
            }
            else {
                this.setState({ small: 'btn btn-light' });
                this.setState({ medium: 'btn btn-light active', selectedButton: 'm' });
                this.setState({ large: 'btn btn-light' });
            }
            break;
        case 'l':
            if (this.state.large === 'btn btn-light active') {
                this.setState({ small: 'btn btn-light' });
                this.setState({ medium: 'btn btn-light' });
                this.setState({ large: 'btn btn-light', selectedButton: '' });
            }
            else {
                this.setState({ small: 'btn btn-light' });
                this.setState({ medium: 'btn btn-light' });
                this.setState({ large: 'btn btn-light active', selectedButton: 'l' });
            }
            break;
        default:
      }
  }


}

export default Home;
