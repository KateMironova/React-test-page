import React from 'react';
import './testComponent.less';
import TestItem from '../testItem/TestItem.jsx';
import TestNavigation from '../testNavigation/TestNavigation.jsx';
import questions from '../helper/questions';
import TestResult from '../testResult/TestResult.jsx';

export default class TestComponent extends React.Component {
    
    state = {
        questions: questions,
        currentTestIndex: 0,
        isTestCompleted: false
    };

    currentTestIndexChanged = (index) => {
        this.setState(() => ({currentTestIndex: index}));
    };
  
    answerChecked = (selectedOption) => {
        questions[this.state.currentTestIndex].selectedOption = selectedOption;
        this.setState(() => ({questions}));
    };

    checkTest = () => {
        this.setState(() => ({isTestCompleted: true}));
    };

    startTestAgain =() => {
        this.setState(() => ({isTestCompleted: false, currentTestIndex: 0, questions: questions}));
    }

    render() {
        const { questions, currentTestIndex, isTestCompleted } = this.state;
        return (
            !isTestCompleted ? (
            <div className='test-container'>
               <TestNavigation test = {questions} currentTestIndex = {currentTestIndex} currentTestIndexChanged={this.currentTestIndexChanged} 
               checkTest = {this.checkTest}/>
               <TestItem test = {questions[currentTestIndex]} answerChecked = {this.answerChecked}/>
            </div> ) :
            <TestResult tests = {questions} startTestAgain={this.startTestAgain} />
        );
    }
}
