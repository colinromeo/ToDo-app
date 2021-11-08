import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieAxiosInstance } from "../../src/apis/apis";

const initialState = {
    movieCategories: [],
    status:"",
    movieDetail: null
};
export const fetchMovieCategories = createAsyncThunk(
    'movie/fetchMovieCategories',
    async (params, {rejectWithValue}) => {
      const api = await getMovieAxiosInstance();
      try {
        const response = await api.get('/genre/movie/list', {params});
        
        return response;
      } catch (error) {
        
        return rejectWithValue(error.response.data);
      }
    },
  );

  export const fetchMovieDetails = createAsyncThunk(
    'movie/fetchMovieDetails',
    async (params, {rejectWithValue}) => {
      const api = await getMovieAxiosInstance();
      try {
        const response = await api.get(`/genre/movie/list/${params?.id}`);
        
        return response;
      } catch (error) {
        
        return rejectWithValue(error.response.data);
      }
    },
  );


const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers:{
        [fetchMovieCategories.pending]: (state, action) => {
            state.status="pending"
            state.movieCategories=[];
        },
        [fetchMovieCategories.fulfilled]: (state, action) => {
            state.status="success"
            // console.log("success==",action)
            state.movieCategories=action?.payload?.data?.genres;
        },
        [fetchMovieCategories.rejected]: (state, action) => {
            state.status="failed"
        },
        [fetchMovieDetails.pending]: (state, action) => {
            state.status="pending"
            state.movieDetail=[];
        },
        [fetchMovieDetails.fulfilled]: (state, action) => {
            state.status="success"
            // console.log("success==",action)
            state.movieDetail=action?.payload?.data?.genres;
        },
        [fetchMovieDetails.rejected]: (state, action) => {
            state.status="failed"
        },
    }
});


export default movieSlice.reducer;