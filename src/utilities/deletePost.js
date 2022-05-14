import axios from "axios";
import { getUserToken } from "./getUserToken";

export const deletePost = async(id,postDispatch)=>{
    
    try {
        const {data}= await axios({
            method:"DELETE",
            url:`/api/posts/${id}`,
            headers:{
                authorization:getUserToken()
            }
        })
        
        postDispatch({type:"DELETE_POST",payload:data.posts})
    } catch (error) {
        console.log(error);
    }
}