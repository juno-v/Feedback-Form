import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, /* combineReducers, */ applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

 const feedback = {
        feeling: '',
        understanding: '',
        support: '',
        comments: '',
 }

const feedbackInfo = (state = feedback, action ) => {
    switch (action.type) {
        case 'FEELING': {
          return state = {
              ...state,
              feeling: action.payload,
        }
        }
        case 'UNDERSTANDING': {
            return state= {
                ...state,
                understanding: action.payload,
            
            }
        }
        case 'SUPPORT': {
            return state= {
                ...state,
                support: action.payload,
            }
        }
        case 'COMMENTS': {
            return state= {
                ...state,
                comments: action.payload,
            }
        }
        case 'GET_FEEDBACK': {
          return action.payload; 
        }
        default:
        return state;
    }
}


// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
        feedbackInfo,
    applyMiddleware(logger),
); 

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(
<Provider store={storeInstance}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();

