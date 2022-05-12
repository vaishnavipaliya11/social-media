import { createContext, useContext, useReducer } from "react";

const PostContext = createContext()

const PostProvider = ({children})=>{
    const [postState, postDispatch]= useReducer(PostReduc,{
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