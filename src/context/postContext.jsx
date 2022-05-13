import { createContext, useContext, useReducer } from "react";
import { postReduc } from "../reducers/postReducer";
const PostContext = createContext()

const PostProvider = ({children})=>{
    const [postState, postDispatch]= useReducer(postReduc,{
        createPost:[]
    })
    return(
        <PostContext.Provider value={{postState, postDispatch}}>
        {children}
        </PostContext.Provider>
    )

}

const usePost = () => useContext(PostContext)

export {usePost, PostProvider}