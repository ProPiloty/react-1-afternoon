import React, {Component} from 'react';

class Palindrome extends Component{

    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange(userInput){
        this.setState({userInput: userInput});
    }

    isPalindrome(input){
        let word = input.toLowerCase();
        let wordReversed = word.toLowerCase().split('').reverse().join('');
        
        if (word === wordReversed){
            this.setState({palindrome: 'True'});
        } else {
            this.setState({palindrome: 'False'});
        }
    } 

    render(){
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => {this.handleChange(e.target.value)}}></input>
                <button className='confirmationButton' onClick={(e) => {this.isPalindrome(this.state.userInput)}}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;