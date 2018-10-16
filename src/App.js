import React, { Component } from 'react';
import './App.css';
import math from 'mathjs'
import CustomButton from './CustomButton';
import Display from './Display'
import Buttons from './Buttons'

class App extends Component {
  constructor() {
    super()
    this.state = { operations: [] }
  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      this.setState({
        operations: [result],
      })
    }
  }

  handleClick = e => {
    const value = e.target.closest('.button').getAttribute('value')
    console.log(e.target)
    console.log(value)
    switch (value) {
      case 'clear':
        this.setState({ 
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = this.state.operations
        console.log(newOperations)
        this.setState({
          operations: newOperations.concat(value),
        })
        break
    }
  }


  render() {
    return (
      <div className="App">
        <Display data={this.state.operations} />
        <Buttons>
          <CustomButton onClick={this.handleClick} value="clear">
            Clear
          </CustomButton>
          <CustomButton onClick={this.handleClick} value="/">
            /
          </CustomButton>
        </Buttons>
        <Buttons>
          <CustomButton onClick={this.handleClick} value="7">
            7
          </CustomButton>
          <CustomButton onClick={this.handleClick} value="8">
            8
          </CustomButton>
          <CustomButton onClick={this.handleClick} value="9">
            9
          </CustomButton>
          <CustomButton onClick={this.handleClick} value="-">
            -
          </CustomButton>
        </Buttons>

        <Buttons>
          <CustomButton onClick={this.handleClick} value="4">
            4
          </CustomButton>
          <CustomButton onClick={this.handleClick} value="5">
            5
          </CustomButton>
          <CustomButton onClick={this.handleClick} value="6">
            6
          </CustomButton>
          <CustomButton onClick={this.handleClick} value="+">
            +
          </CustomButton>
        </Buttons>

        <Buttons>
          <CustomButton onClick={this.handleClick} value="1">
            1
          </CustomButton>
          <CustomButton onClick={this.handleClick} value="2">
            2
          </CustomButton>
          <CustomButton onClick={this.handleClick} value="3">
            3
          </CustomButton>
          <CustomButton onClick={this.calculateOperations} value="=">
            =
          </CustomButton>
        </Buttons>        
      </div>
    );
  }
}

export default App;
