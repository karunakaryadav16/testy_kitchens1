
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'karunakar_yadav',
  initialState: [],                                     
  reducers: {
    addtocart: (state, action) => {           
      state.push(action.payload);
    },
    removefromcart: (state, action) => {
      // Filter out the item with the specified id
      return state.filter(item => item.title !== action.payload.title);
    },
  },
});

//console.log(cartSlice)
// Action creators are generated for each case reducer function
export const { addtocart, removefromcart } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    Ganesh_reddy: cartSlice.reducer,
  },
});
//console.log(store)
