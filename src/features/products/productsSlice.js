import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductById } from '../../services/api';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { products } = getState().products;
            if (products.length > 0) {
                return products;
            }
            return await fetchAllProducts();
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getProductDetail = createAsyncThunk(
    'products/getProductDetail',
    async (id, { getState, rejectWithValue }) => {
        try {
            const { products } = getState().products;
            const cachedProduct = products.find(p => p.id === parseInt(id));
            if (cachedProduct) return cachedProduct;

            return await fetchProductById(id);
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const initialState = {
    products: [],
    selectedProduct: null,
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        clearSelectedProduct: (state) => {
            state.selectedProduct = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getProductDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(getProductDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
