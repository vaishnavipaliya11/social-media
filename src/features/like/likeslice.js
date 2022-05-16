import { createSlice} from "@reduxjs/toolkit";


const initialState= {
    likeCount:0
}

export const likeSlice = createSlice({
    name:"like",
    initialState,
    reducers:{}
})

export default likeSlice.reducer;