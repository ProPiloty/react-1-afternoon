import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super();

        this.state={
            num1:0,
            num2: 0,
            sum: null,
        }
    }

    updateNum1 = (numInput) => {
        this.setState({num1: numInput});
    }

    updateNum2 = (numInput) => {
        this.setState({num2: numInput});
    }

    add = (num1, num2) => {
        let newSum = +num1 + +num2;
        this.setState({sum: newSum});
    }

    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' type='number' onChange={(e) => {this.updateNum1(e.target.value)}}></input>
                <input className='inputLine' type='number' onChange={(e) => {this.updateNum2(e.target.value)}}></input>
                <button className='confirmationButton' onClick={(e) => {this.add(this.state.num1, this.state.num2)}} >Add</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;