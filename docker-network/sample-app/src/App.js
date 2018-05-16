import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withRouter, Route } from 'react-router-dom';
import Fruits from './Fruits';


class App extends Component {

  handleFruitsClick = () => {
    this.props.history.push('/fruits');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fruits of React</h1>
          <Menu open={true}>
            <MenuItem onClick={this.handleFruitsClick}>Fruits</MenuItem>
          </Menu>
        </header>
        <div className="App-intro">
          <Route path="/fruits" component={Fruits} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
