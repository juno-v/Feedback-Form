import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* postFeedback(action) {
    try {
    console.log(`HIT editEntries`);
    console.log(`PAYLOAD: `, action.payload);
    
    const feedback = action.payload
    
    yield axios.post(`/feedback`, feedback);
    
    }
    catch (error) {
      console.log(`Couldn't edit user's entries`);
    }
}

function* getFeedback(action) {
  try {
      console.log('GET feedback forms');
      const getResponse = yield axios.get(`/feedback`);
      const action = {type: 'SET_FEEDBACK', payload: getResponse.data};
      yield put(action);
  } 
  
  catch (error) {
      console.log(`Couldn't get the feedback forms`);
      alert(`Sorry couldn't get the feedback forms. Try again later.`)
  }
}

function* feedbackSaga() {
    yield takeLatest('POST_FEEDBACK', postFeedback);
    yield takeLatest('GET_FEEDBACK', getFeedback);
  }

export default feedbackSaga;