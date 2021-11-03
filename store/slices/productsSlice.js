import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../src/apis/apis';

const initialState = {
  products: [],
  status:""
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

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
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
  },
});

export default productSlice.reducer;
