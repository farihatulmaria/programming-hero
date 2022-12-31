const { createSlice } = require("@reduxjs/toolkit");

const initialState ={
    email:"",
    role:"",
    isLoading:true,
    isError:false,
    error:"" 
} 

const auth = createSlice({
    name:"auth",
    initialState,
})

export default auth.reducer