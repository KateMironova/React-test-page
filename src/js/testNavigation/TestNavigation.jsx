import React from 'react';
import PropTypes from 'prop-types';
import './testNavigation.less';

export default class TestNavigation extends React.Component {
    static propTypes = {
        test: PropTypes.array.isRequired,
        currentTestIndex: PropTypes.number.isRequired,
        currentTestIndexChanged: PropTypes.func,
        checkTest: PropTypes.func
    };

    state = {
        currentTestIndex: this.props.currentTestIndex
    };

    handleItemClicked = (event) => {
        let index = parseInt(event.target.value);
        this.setState(() => (
            {currentTestIndex: index}
        ));
        this.props.currentTestIndexChanged && this.props.currentTestIndexChanged(index);
    };

    countAnsweredTests = () => {
        const {test} = this.props;
        let count = 0;
        test.forEach(test => {if(test.selectedOption) count++});
        return count;
    };

    render() {
        const {test} = this.props;
        const {currentTestIndex} = this.state;

        return (
            <>
                <div className={"test-navigation-container"}>
                    {test.map((test, index) => (
                        <button type={"button"}
                                key={index}
                                value={index}
                                className={"test-navigation-container__number " + (index === currentTestIndex ? "active" : "")}
                                onClick={this.handleItemClicked}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <div className={"status-bar"}>
                    {this.countAnsweredTests()} / {test.length}
                </div>
                <div className={"check-bar"}>
                    <button className={"check-bar__check-btn " + (this.countAnsweredTests() < test.length ? "not-ready" : "ready") }
                            onClick={this.props.checkTest}>
                        Проверить
                    </button>
                </div>                
            </>
        );
    }
}