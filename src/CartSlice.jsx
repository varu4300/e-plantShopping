import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload
        const existing = state.items.find(g => action.payload.name === g.name)

        if (!existing) {
            state.items.quantity += 1
        } else {
            state.items.push({name, image, cost, quantity})
        }
    },
    removeItem: (state, action) => {
        const cartItems = items.filter(g => action.payload.name !== g.name)
        state.items = cartItems
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        const item = state.items.find(g => g.name === name);

        if (item) {
            item.quantity = quantity
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
