import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getProductById } from '../../services/api';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { products } = getState().products;

            if (products.length > 0) {
                return products;
            }

            const data = await getAllProducts();
            return data;
        } catch (error) {

            return rejectWithValue(error.message);
        }
    }
);

export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (id, { getState, rejectWithValue }) => {
        try {
            const { products } = getState().products;

            const existingProduct = products.find(p => p.id === parseInt(id));
            if (existingProduct) {
                return existingProduct;
            }

            const data = await getProductById(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
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

            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;

