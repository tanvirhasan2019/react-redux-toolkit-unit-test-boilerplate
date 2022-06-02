import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUsersApi } from './api/fetchUser'

const initialState = {
  users: [],
  loading: true,
  error: ""
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (thunkAPI) => {
    try {
      const response = await fetchUsersApi()
      return response.data
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)

// Then, handle actions in your reducers:
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.loading = false
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error
      state.loading = false
    })
  },
})
//export const  {fetchUsers } = userSlice.actions;
export default userSlice.reducer;