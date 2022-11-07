import { Fetchproducts } from "../constants/actionstype";



export  function Fetchproduct( state = [], action ) {
    switch (action.type) {
        case Fetchproducts.Fetchproducts  :

         return     [ ...action.payload ]
    
        default:
            return state
    }
}