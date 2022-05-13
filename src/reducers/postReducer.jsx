export const postReduc = (state,action) =>{
switch (action.type) {
    case "CREATE_POST":
        return{...state,createPost:action.payload}
      

    default:
        return state;
}
}
