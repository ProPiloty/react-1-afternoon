import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            employees: [
                {
                    name: 'John Doe',
                    title: 'Manager',
                    children: 'None',
                },
                {
                    name: 'Jane Doe',
                    age: 23,
                    children: 'Three',
                },
                {
                    age: 42,
                    title: 'CEO',
                    children: 'None',
                }
            ]
        }
    }

    

    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.employees, null, 10)}</span>
                <input className='inputLine' type='text'onChange={(e) => {this.handleChange(e.target.value)}}></input>
                <button className='confirmationButton' onClick={() => {this.filterEmployees(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterObjectRb'>Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;