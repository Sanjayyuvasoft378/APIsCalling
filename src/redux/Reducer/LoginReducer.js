const initialData = {
   userData : [],
   deleteData : []
}
const LoginReducer = (state=initialData,action) =>{
    console.log("object");
switch(action.type){
    case "GET_LOGIN":
        return {
            ...state,
            userData :action.payload
        }
    case "GET_SIGNUP":
        return {
            ...state,
            userData:action.payload

        }

        case "GET_POST":
            return {
                ...state,
                userData:action.payload
    
            }
            case "ADD_POST":
                return {
                    ...state,
                    userData:action.payload
        
                }

            case "UPT_POST":
                return {
                    ...state,
                    userData:action.payload
                }

                case "GET_POST_BY_ID":
                    return {
                        ...state,
                        userData:action.payload
            
                    }

                case "DELETE_POST":
                    return {
                        ...state,
                        deleteData:action.payload
                    }
        default:
            return state
    }
   

}
export default LoginReducer;
