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
          feeling: action.payload.feeling,
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
    case 'RESET': {
        return state = feedback; 
    }
    case 'GET_FEEDBACK': {
      return action.payload; 
    }
    default:
    return state;
    }
}

export default feedbackInfo; 