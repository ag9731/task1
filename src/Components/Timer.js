import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  render () {
    const {count} = this.state
    return (
      <div>
        <h1>Current Count: {count}</h1>
      </div>
    )
  
}
  // setInterval
  // clearInterval
  componentDidMount () {
    const {startCount} = this.props
    this.setState({
      count: startCount
    })
    this.doIntervalChange()
  }

  doIntervalChange = () => {
      this.myInterval = setInterval(() => {
        
        if(this.state.count >= 100)
        {
          clearInterval(this.myInterval);
        }
        
        else
        {
      this.setState(prevState => ({
        count: prevState.count * 1 + 1
      }));
    }
          
    }, 300) 
  }

  componentWillUnmount () {
    clearInterval(this.myInterval)
  }
}

export default Timer