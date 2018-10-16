import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class CustomButton extends Component {
  button_background = "#E91E63"
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        className="button"
        value={this.props.value}
        label={this.props.label}
        variant="contained"
        // style={button_background}
      >
      {this.props.children}
      </Button>
    )
  }
}

export default CustomButton