import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_booking_booking_details_list = createAsyncThunk(
  "paginatedBookingDetailLists/modules_booking_booking_details_list",
  async payload => {
    const response = await apiService.modules_booking_booking_details_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const paginatedBookingDetailListsSlice = createSlice({
  name: "paginatedBookingDetailLists",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_booking_booking_details_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  modules_booking_booking_details_list,
  slice: paginatedBookingDetailListsSlice
}
