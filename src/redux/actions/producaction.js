import axios from 'axios';
import {
  backendactions,
  Frontendactions,
  uiuxactions,
  Fetchproducts
} from '../constants/actionstype';

export const setfrontend = (product) => {
  return {
    type: Frontendactions.SET_PRODUCTS,
    payload: product,
  };
};

export const setBackend = (product) => {
  return {
    type: backendactions.SET_PRODUCTS,
    payload: product,
  };
};

export const setUiux = (product) => {
  return {
    type: uiuxactions.SET_PRODUCTS,
    payload: product,
  };
};

export const Deletaccord = (id, deletername) => {
  return {
    type: `REMOVE_${deletername}`,
    payload: id,
  };
};

export const Leadaccord = (id, leadername) => {
  return {
    type: `Lead_${leadername}`,
    payload: id,
  };
};

export const Fetchproduct =  () => {
  return async function(dispatch) {
  try {
    const response  = await axios('https://api.npoint.io/39167dda58b162cf3290')
    dispatch ({type : Fetchproducts.Fetchproducts , payload : response.data})
  } catch (error) {
    console.error(error);
  }
   
  }

}