import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../src/apis/apis'; 
import * as _ from 'lodash'

const initialState = {
  products: [],
  status:"",
  singleProduct:null,
  cart: []
};

export const fetchProductsList = createAsyncThunk(
  'product/fetchProductsList',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.get('/products', {params});
      
      return response;
    } catch (error) {
      
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchSingleProduct = createAsyncThunk(
  'product/fetchSingleProduct',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.get(`/products/${params?.id}`);
      
      return response;
    } catch (error) {
      
      return rejectWithValue(error.response.data);
    }
  },
);


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action?.payload)
    },
    removeFromCart: (state, action) => {
      state.cart=_.remove(state.cart, function(item){
        return item.id !=action.payload
      })
      console.log("state===", action)

    }
  },
  extraReducers: {
    [fetchProductsList.pending]: (state, action) => {
        state.status="pending"
        state.products=[];
    },
    [fetchProductsList.fulfilled]: (state, action) => {
        state.status="success"
        // console.log("success==",action)
        state.products=action?.payload?.data;
    },
    [fetchProductsList.rejected]: (state, action) => {
        state.status="failed"
    },
    [fetchSingleProduct.pending]: (state, action) => {
      state.status="pending"
      state.singleProduct=[];
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
        state.status="success"
        // console.log("success==",action)
        state.singleProduct=action?.payload?.data;
    },
    [fetchSingleProduct.rejected]: (state, action) => {
        state.status="failed"
    },
  },
});

export const {addToCart, removeFromCart} = productSlice.actions;
export default productSlice.reducer;
