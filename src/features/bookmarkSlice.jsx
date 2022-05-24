import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    error:"false",
    bookmark:[]
}

export const bookmarkSlice= createSlice({
    name:"bookmark",
    initialState,
    reducers:{}
})