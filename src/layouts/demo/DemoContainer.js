import React, { Component } from 'react';
import Demo from './Demo.js';

// Import eth libraries we need
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

export default class DemoContainer extends Component {
  componentDidMount() {
    
  }
  render() {
    return(
      <Demo/>
    );
  }
}
