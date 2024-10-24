import { createSlice } from "@reduxjs/toolkit";




export const wishlistSlice = createSlice({
    name : 'wishlist',
    initialState : [],
    reducers : {
        //to add a item to a wishlist
        addwishlistitem : (state , action)=>{
            state.push(action.payload)
        },
        removewishlistitem : (state , action)=>{
           return state.filter((item)=>item.id != action.payload)
        }

    }
})

export const {addwishlistitem , removewishlistitem}= wishlistSlice.actions

export default wishlistSlice.reducer

