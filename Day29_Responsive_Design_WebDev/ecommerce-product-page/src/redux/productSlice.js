import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: {
      id: 1,
      name: 'Modern Chair',
      price: 120,
      description: 'A modern chair with a sleek design and comfortable seating.',
      images: [
        'https://images.unsplash.com/photo-1495383723765-a7dfbcac2c9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1590075633056-de7a19338adf?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1721989518229-3e84837fc398?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
  };
  

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export const selectProduct = (state) => state.product.product;
export default productSlice.reducer;
