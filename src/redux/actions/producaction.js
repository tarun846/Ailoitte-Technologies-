import axios from 'axios';
import {
actionstype
} from '../constants/actionstype';

export const setfrontend = (product , value) => {
  return {
    type: actionstype.SET_PRODUCTS,
    payload: product,
    value : value
  };
};

export const Deletaccord = (id, deletename) => {
  return {
    type:  actionstype.REMOVE_PRODUCT,
    payload: id,
    value : deletename, 
  };
};

export const Leadaccord = (id, leadername ) => {
  console.log(id , leadername);
  return {
    type: actionstype.Lead_PRODUCT,
    payload: id,
    value : leadername
  };
};

export const Fetchproduct =  () => {
  return async function(dispatch) {
  try {
    const response  = await axios('https://api.npoint.io/d223e8007f11797cae6f')
    console.log(response.data);
    dispatch ({type : actionstype.FETCH_PRODUCT , payload : response.data})
  } catch (error) {
    console.error(error);
  }
   
  }

}