import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filteredProducts: [],
    selectedCategory: ''
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsData: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        },
        setCategoryData: (state, action) => {
            state.selectedCategory = action.payload;
            if (action.payload) {
                state.filteredProducts = state.products.filter((product: any) => product.category === action.payload);
            } else {
                state.filteredProducts = state.products;
            }
        },
    },
});

export const { setProductsData, setCategoryData } = productSlice.actions;
export default productSlice.reducer;