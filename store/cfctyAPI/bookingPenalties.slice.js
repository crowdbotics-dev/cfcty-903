import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_booking_penalties_create = createAsyncThunk(
  "bookingPenalties/modules_booking_penalties_create",
  async payload => {
    const response = await apiService.modules_booking_penalties_create(payload)
    return response.data
  }
)
export const modules_booking_penalties_retrieve = createAsyncThunk(
  "bookingPenalties/modules_booking_penalties_retrieve",
  async payload => {
    const response = await apiService.modules_booking_penalties_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_booking_penalties_update = createAsyncThunk(
  "bookingPenalties/modules_booking_penalties_update",
  async payload => {
    const response = await apiService.modules_booking_penalties_update(payload)
    return response.data
  }
)
export const modules_booking_penalties_partial_update = createAsyncThunk(
  "bookingPenalties/modules_booking_penalties_partial_update",
  async payload => {
    const response = await apiService.modules_booking_penalties_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_booking_penalties_destroy = createAsyncThunk(
  "bookingPenalties/modules_booking_penalties_destroy",
  async payload => {
    const response = await apiService.modules_booking_penalties_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bookingPenaltiesSlice = createSlice({
  name: "bookingPenalties",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(modules_booking_penalties_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_booking_penalties_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_penalties_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_penalties_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        modules_booking_penalties_retrieve.fulfilled,
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
      .addCase(modules_booking_penalties_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_penalties_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_booking_penalties_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_penalties_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        modules_booking_penalties_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_booking_penalties_partial_update.fulfilled,
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
        modules_booking_penalties_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_booking_penalties_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_booking_penalties_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_penalties_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  modules_booking_penalties_create,
  modules_booking_penalties_retrieve,
  modules_booking_penalties_update,
  modules_booking_penalties_partial_update,
  modules_booking_penalties_destroy,
  slice: bookingPenaltiesSlice
}
