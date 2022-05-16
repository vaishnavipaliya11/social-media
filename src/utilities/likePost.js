import axios from "axios"
import getUserToken from "./getUserToken"
import { useSelector, useDispatch } from "react-redux";

export const likePost = async(_id) =>{
    const dispatch = useDispatch()
    try {
        const {data}= await axios  ({
            method:"POST",
            url:`/api/posts/like/${_id}`,
            data:{},
            headers:{
                authorization:getUserToken()
            }
        })

        dispatch(likeUserPost({type:"ADD_LIKE",payload:data.posts}))
    } catch (error) {
        
    }
}