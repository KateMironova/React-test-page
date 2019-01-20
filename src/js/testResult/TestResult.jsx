import React from 'react';
import './testResult.less';
import PropTypes from 'prop-types';

export default class TestResult extends React.Component {
    
    static propTypes = {
        tests: PropTypes.array.isRequired,
        startTestAgain: PropTypes.func.isRequired
    };

    countTestResult = () => {
        let tests = this.props.tests;
        let countCorrectAnswers = 0;
        tests.forEach(test => {
            if (test.selectedOption === test.correctAnswer) countCorrectAnswers++
        });
        return countCorrectAnswers / tests.length * 100;
    };

    render() {
        return (
            <div className={"test-result"}>
                <p className={"test-result__percents"}>
                    Ваш результат: {this.countTestResult()} %
                </p>
                <button
                    className={"test-result__button"}
                    onClick={this.props.startTestAgain}>
                    Пройти тест с начала
                </button>
            </div>
        );
    }
}
