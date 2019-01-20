import React from 'react';
import './mainComponent.less';
import TestComponent from '../testComponent/TestComponent.jsx';

export default class MainComponent extends React.Component {
    
    render() {
        return (
            <div className='page-wrapper'>
                <header className='page-wrapper__header'>

                </header>

                <main className='page-wrapper__main'>
                    <TestComponent>

                    </TestComponent>
                </main>

                <footer className='page-wrapper__footer'>

                </footer>
        </div>
        );
    }
}
