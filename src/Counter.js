import React from "react";
import { connect } from 'react-redux';

const ContainerStyle = {
  display: 'flex'
}

const buttonStyle = {
  width: '40px',
  height: '40px',
  fontSize: '1.5rem'
}

class Counter extends React.Component {

  addOne = () => {
    this.props.dispatch({ type: 'ADD_ONE' });
    // this.setState({
    //   number: this.state.number + 1
    // })
  }

  minusOne = () => {
    this.props.dispatch({ type: 'MINUS_ONE' });
    // this.setState({
    //   number: this.state.number - 1
    // })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{ this.props.number }</h1>
          <div style={ContainerStyle}>
            <button onClick={this.minusOne} type="button" style={buttonStyle}>-</button>
            <button onClick={this.addOne} type="button" style={buttonStyle}>+</button>
          </div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(Counter);
