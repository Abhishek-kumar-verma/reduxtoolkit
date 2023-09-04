import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusCode } from "../utils/StatusCode";
 
const initialState = {
    data : [],
    status:'idle'
}
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers : {
        // in redux fetch data
        // fetchProducts(state,action){
        //     state.data = action.payload
        // }
    },
    // in redux toolkit api calling
    extraReducers :(builder) =>{
        builder
        .addCase( getProducts.pending , ( state , action) =>{
            state.status = StatusCode.Loading
        })
        .addCase( getProducts.fulfilled , (state, action) =>{
            state.data = action.payload;
            state.status = StatusCode.Idle;
        })
        .addCase( getProducts.rejected , ( state , action) =>{
            state.status = StatusCode.Error;
        })

    }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

// in redux toolkit we call api by createAsyncThunk 
export const getProducts = createAsyncThunk( 'products/get' , async () =>{
    const data = await fetch("https://fakestoreapi.com/products");
        const result = await data.json();
        return result;
})

// in redux we call api this way 
// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//         const data = await fetch("https://fakestoreapi.com/products");
//         const result = await data.json();
//         dispatch(fetchProducts(result));
//     }
// }