import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './js/mainComponent/MainComponent.jsx';
import './styles/styles.less';

ReactDOM.render(<MainComponent/>, document.querySelector('#root'),
    () => console.log('Component has been created')
);
