import {actionstype} from '../constants/actionstype';

 
function getname(action) {
  return   action?.value?.split(' ').join('')
} 


function removeduplicate(state, action , val ) {
  const text =  getname(action)
  let da = state[text].find((e) => e.value.id === action.payload.value.id);
  return da;
}

function addCrown(data, id , value  ) {

let newvalue = data[value].map((e) => {
        return { ...e, flag: false };
  });
    newvalue.filter((e) => {
    if (e.value.id === id) {
    const foundIdx = newvalue.findIndex((el) => el.value.id === id);
    let value = { ...e, flag: true };
    newvalue.splice(foundIdx, 1);
    newvalue.unshift(value);
    return value;
    }
    return null
  });  

  return  newvalue
}



let initialState =  JSON.parse(localStorage.getItem('sahi')) ||   {
  FrontendDeveloper: [],
  BackendDeveloper : [],
  UIUX : [],
}
export const  DataReducer = (state = initialState, action) => {
  let text = getname(action)
  switch (action.type) {
    case   actionstype.SET_PRODUCTS:
      if (removeduplicate(state, action)) {
        return state;
      }
      state  =  { ...state  ,  [text] : [   ...state[text] ,  { flag: false, ...action.payload } ] } 
      return state

    case actionstype.REMOVE_PRODUCT:
      let textvalue = getname(action)
      let data = state[textvalue].filter((e) => {
      return  e.value.id !== action.payload
      
      });
       return  { ...state, [text]  : [  ...data  ]  };
      
    case actionstype.Lead_PRODUCT:
      let crownadder = addCrown(state, action.payload , text )     ;
      return { ...state,  [text] : crownadder }; 
      
    default:
      return state;
  }
};

