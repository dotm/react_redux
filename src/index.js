import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducer from './reducers'

import './index.css';
import App from './components/App';

const default_users = [
    {
        "id": "5aedbd8692b696a8f35e890d",
        "first_name": "Miller",
        "last_name": "Amyes",
        "email": "mamyes0@posterous.com",
        "gender": "Male"
    }, {
        "id": "5aedbd90352ea61f53ed330b",
        "first_name": "Leonora",
        "last_name": "Jenne",
        "email": "ljenne11@google.co.jp",
        "gender": "Female"
    }
]
const default_state = {
    users: default_users
}
const store = createStore(allReducer, default_state)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
