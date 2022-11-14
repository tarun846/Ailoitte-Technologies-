import { actionstype } from "../constants/actionstype";



export  function Fetchproduct( state = [], action ) {
    switch (action.type) {
        case actionstype.FETCH_PRODUCT  :

         return     [ ...action.payload ]
    
        default:
            return state
    }
}

export  const dataSelector  = (state) => state.productfetch