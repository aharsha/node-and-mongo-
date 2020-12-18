import  React , {Component}  from 'react';
class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: this.props.tableNum,
    };
  }

  doSqr()
 {
    console.log(this);
    this.setState({
        num: this.state.num*this.state.num
    })
    
    
 }
  render() {
    return (
      <div>
        <p> {this.state.num}</p>
        <button onClick={this.doSqr.bind(this)}>GetSquare </button>
      </div>
    );
  }
}
export  default Table;