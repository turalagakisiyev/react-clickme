import React, { Component } from 'react'

class Button extends Component {

  render() {
    return (
      <div>
        <button onClick={()=>{console.log("Button clicked")}}>Click</button>
      </div>
    )
  }
}

export default Button
