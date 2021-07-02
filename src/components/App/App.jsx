import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    constructor(){
        super();

        this.state = {
                headerExpanded: true,
                suggestedNames : [],

        };
    }

    handleInputChange = (inputText) => {
            
           this.setState({ 
               headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [], });
    };

    render(){

        return (
            <div>
                <Header
                 headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChage={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}
export default App;