import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../api';

interface DataState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  data: [],
  status: 'idle',
  error: null,
};

// Generic async thunk tanımlama
export const fetchGenericData = createAsyncThunk<any, string>(
  'data/fetchGenericData',
  async (apiUrl) => {
    const data = await fetchData(apiUrl);
    return data;
  }
);

// Slice oluşturma
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // Ek reducers tanımlayabilirsiniz
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenericData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchGenericData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(fetchGenericData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Fetch data failed';
    });
  },
});

export default dataSlice.reducer;