
import {
  backendactions,
  Frontendactions,
  uiuxactions,
} from '../constants/actionstype';

function removeduplicate(state, action) {
  let da = state.data.find((e) => e.value.id === action.payload.value.id);
  
  return da;
}

function run() {
  localStorage.setItem('cmpvalue' , JSON.stringify([frontendinitialState.data , backendinitialState.data , uiuxinitialState.data] ) )
}
function addCrown(data, id) {
  let newvalue = data.data.map((e) => {
    return { ...e, flag: false };
  });

  let mpo = newvalue.filter((e) => {
    
    if (e.value.id === id) {

      const foundIdx = newvalue.findIndex((el) => el.value.id === id);
      let value = { ...e, flag: true };
      newvalue.splice(foundIdx, 1);
      newvalue.unshift(value);
      return value;
    }
    return null
  }); 
  return newvalue
}

const frontendinitialState = {
  value: 'frontend',
  data: [],
};

const backendinitialState = {
  value: 'backend',
  data: [],
};

const uiuxinitialState = {
  value: 'ui ux',
  data: [],
};

export const frontend = (state = frontendinitialState, action) => {
  switch (action.type) {
    case Frontendactions.SET_PRODUCTS:
       console.log('adding');
      if (removeduplicate(state, action)) {
        return state;
      }
      
      let data = [{ flag: false, ...action.payload }, ...state?.data];
      run()
      return { value: 'Frontend Developer', data: data };

    case Frontendactions.REMOVE_Frontend_Developer:
      let bini = state.data.filter((e) => e.value.id !== action.payload);
      run()
      return { ...state, data: bini };

    case Frontendactions.Lead_PRODUCT:
      let crownadder = addCrown(state, action.payload);
      run()
      return { ...state, data: crownadder };
    default:
      return state;
  }
};

export const backend = (state = backendinitialState, action) => {
  switch (action.type) {
    case backendactions.SET_PRODUCTS:
      if (removeduplicate(state, action)) {
        return state;
      }

      let data = [{ ...action.payload, flag: false }, ...state?.data];
      run()
      return { value: 'Backend Developer', data: data };
    case backendactions.REMOVE_SELECTED_PRODUCT:
      let bini = state.data.filter((e) => e.value.id !== action.payload);
      run()
      return { ...state, data: bini };
    case backendactions.Lead_PRODUCT:
      let crownadder = addCrown(state, action.payload);
      run()
      return { ...state, data: crownadder };
    default:
      return state;
  }
};

export const uiux = (state = uiuxinitialState, action) => {
  switch (action.type) {
    case uiuxactions.SET_PRODUCTS:
      if (removeduplicate(state, action)) {
        return state;
      }

      let data = [{ ...action.payload, flag: false }, ...state?.data];
      run()
      return { value: 'UI UX', data: data };
    case uiuxactions.REMOVE_SELECTED_PRODUCT:
      let bini = state.data.filter((e) => e.value.id !== action.payload);
      run()
      return { ...state, data: bini };

    case uiuxactions.Lead_PRODUCT:
      let crownadder = addCrown(state, action.payload);
      run()
      return { ...state, data: crownadder };
    default:
      return state;
  }
};
