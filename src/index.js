import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer' ;
import {Provider} from 'react-redux';

const stonr = createStore(
    reducer
)
const HotProvider = (props) => ( 
    <Provider store = {store}>
    <App /> // f
    </Provider>
)

ReactDOM.render(<Provider />, document.getElementById('root'));
registerServiceWorker();
