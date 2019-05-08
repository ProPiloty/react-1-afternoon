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
                    car: 'ford',
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
            ],

            userInput: '',
            filteredEmployees: [],
        }
    }

    handleChange = (input) => {
        this.setState({
            userInput: input,
        })
        console.log(this.state.userInput);
    }

    filterEmployees = (prop) => {
        let employees = this.state.employees;
        let filteredEmployees = [];

        for (let i = 0; i < employees.length; i++){
            if (employees[i].hasOwnProperty(prop)) {
                filteredEmployees.push(employees[i]);
            }
        }

        this.setState({filteredEmployees: filteredEmployees});
    }

    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.employees, null, 10)}</span>
                <input className='inputLine' type='text'onChange={(e) => {this.handleChange(e.target.value)}}></input>
                <button className='confirmationButton' onClick={() => {this.filterEmployees(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;