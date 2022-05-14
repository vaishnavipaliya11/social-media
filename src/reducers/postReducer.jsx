export const postReduc = (state,action) =>{
switch (action.type) {
    case "CREATE_POST":
        return { ...state, createPost: action.payload };
    case "USER_ID":
         return{...state,id:action.payload} 
    case "EDIT_POST":
        return{...state,createPost:action.payload}
        case "DELETE_POST":
            return {...state,createPost:action.payload}
    default:
        return state;
}
}
