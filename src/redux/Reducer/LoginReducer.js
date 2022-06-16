const initialData = {
   userData : []
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
        default:
            return state
    }
   

}
export default LoginReducer;
