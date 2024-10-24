import { createSlice } from "@reduxjs/toolkit";






export const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addcartitem : (state , action)=>{
            state.push(action.payload)
        },
        removecartitem : (state , action)=>{
            return state.filter((item)=>item?.id != action.payload)
        },
        emptycart : (state)=>{
            return state = []
        }
    }
})

export const { addcartitem , removecartitem ,emptycart} = cartSlice.actions

export default cartSlice.reducer