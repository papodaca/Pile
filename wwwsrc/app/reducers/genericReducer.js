
const genericReducer = (models, model, defaultState = {}) => {
  const actionHandlers = {
    'CREATE': (state = {}, action) => {
      let newState = {
        ...state
      };
      newState[models] = [
        ...state[models]
      ];
      newState[models].push(action[model]);
      return newState;
    },
    'ALL':  (state = {}, action) => {
      let newState = {
        ...state
      };
      newState[models] = action[models];
      return newState;
    },
    'GET':  (state = {}, action) => {
      let index = state[models].findIndex((item) => item.id === action[model].id);
      let modelsArray = [
        ...state[models]
      ];
      modelsArray.splice(index, 1, action[model]);
      let newState = {
        ...state
      };
      newState[models] = modelsArray
      return newState;
    },
    'UPDATE': (state = {}, action) => {
      let index = state[models].findIndex((item) => item.id === action[model].id);
      let modelsArray = [
        ...state[models]
      ];
      modelsArray.splice(index, 1, action[model]);
      let newState = {
        ...state
      };
      newState[models] = modelsArray
      return newState;
    },
    'DELETE': (state = {}, action) => {
      let index = state[models].findIndex((item) => item.id === action[model].id);
      let modelsArray = [
        ...state[models]
      ];
      modelsArray.splice(index, 1);
      let newState = {
        ...state
      };
      newState[models] = modelsArray
      return newState;
    },
    'ERROR': (state = {}, action) => {
      return {
        ...state,
        error: action
      };
    }
  };
  return (state, action) => {
    let handler;
    if(action.type.indexOf(model.toUpperCase()) !== -1) {
      if(action.type.indexOf('ERROR') !== -1) {
        handler = actionHandlers['ERROR'];
      } else {
        Object.keys(actionHandlers).forEach((key) => {
          if(action.type.indexOf(key) !== -1) {
            handler = actionHandlers[key];
          }
        });
      }
    }

    if(typeof handler === 'function') {
      return handler.call(undefined, state, action);
    } else {
      return state || defaultState;
    }
  };
};

export default genericReducer;
