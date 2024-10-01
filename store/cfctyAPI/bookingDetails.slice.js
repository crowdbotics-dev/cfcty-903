import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_booking_booking_details_create = createAsyncThunk(
  "bookingDetails/modules_booking_booking_details_create",
  async payload => {
    const response = await apiService.modules_booking_booking_details_create(
      payload
    )
    return response.data
  }
)
export const modules_booking_booking_details_retrieve = createAsyncThunk(
  "bookingDetails/modules_booking_booking_details_retrieve",
  async payload => {
    const response = await apiService.modules_booking_booking_details_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_booking_booking_details_update = createAsyncThunk(
  "bookingDetails/modules_booking_booking_details_update",
  async payload => {
    const response = await apiService.modules_booking_booking_details_update(
      payload
    )
    return response.data
  }
)
export const modules_booking_booking_details_partial_update = createAsyncThunk(
  "bookingDetails/modules_booking_booking_details_partial_update",
  async payload => {
    const response = await apiService.modules_booking_booking_details_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_booking_booking_details_destroy = createAsyncThunk(
  "bookingDetails/modules_booking_booking_details_destroy",
  async payload => {
    const response = await apiService.modules_booking_booking_details_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bookingDetailsSlice = createSlice({
  name: "bookingDetails",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_booking_booking_details_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_retrieve.fulfilled,
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
        modules_booking_booking_details_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_destroy.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.filter(
              record => record.id !== action.meta.arg?.id
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_booking_booking_details_destroy.rejected,
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
  modules_booking_booking_details_create,
  modules_booking_booking_details_retrieve,
  modules_booking_booking_details_update,
  modules_booking_booking_details_partial_update,
  modules_booking_booking_details_destroy,
  slice: bookingDetailsSlice
}
