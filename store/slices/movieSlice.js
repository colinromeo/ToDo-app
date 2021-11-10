import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieAxiosInstance } from "../../src/apis/apis";

const initialState = {
    movieCategories: [],
    status:"",
    nowPlaying: [],
    movieDetails: null
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

  export const fetchCategoryDetails = createAsyncThunk(
    'movie/fetchCategoryDetails',
    async (params, {rejectWithValue}) => {
      const api = await getMovieAxiosInstance();
      try {
        const response = await api.get('/discover/movie/', {params});
        
        return response;
      } catch (error) {
        
        return rejectWithValue(error.response.data);
      }
    },
  );

  export const fetchNowPlayingMovies = createAsyncThunk(
    'movie/fetchNowPlayingMovies',
    async (params, {rejectWithValue}) => {
      const api = await getMovieAxiosInstance();
      try {
        const response = await api.get('/movie/now_playing', {params});
        
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
        const response = await api.get(`/movie/${params?.id}?api_key=c232583a145f7b36e8e9e470b9be9c84`);
        
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
        [fetchCategoryDetails.pending]: (state, action) => {
            state.status="pending"
        },
        [fetchCategoryDetails.fulfilled]: (state, action) => {
            state.status="success"
            // console.log("success==",action);
        },
        [fetchCategoryDetails.rejected]: (state, action) => {
            state.status="failed"
        },
        [fetchNowPlayingMovies.pending]: (state, action) => {
          state.status="pending"
        },
        [fetchNowPlayingMovies.fulfilled]: (state, action) => {
            state.status="success"
            state.nowPlaying=action?.payload?.data?.results?.slice(0,5)
            // console.log("success==",action);
        },
        [fetchNowPlayingMovies.rejected]: (state, action) => {
            state.status="failed"
        },
        [fetchMovieDetails.pending]: (state, action) => {
          state.status="pending"
        },
        [fetchMovieDetails.fulfilled]: (state, action) => {
            state.status="success"
            // console.log("success==",action);
            state.movieDetails=action?.payload?.data;
        },
        [fetchMovieDetails.rejected]: (state, action) => {
            state.status="failed"
        },
    }
});


export default movieSlice.reducer;