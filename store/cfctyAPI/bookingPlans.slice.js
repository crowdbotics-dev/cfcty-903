import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_booking_plans_create = createAsyncThunk(
  "bookingPlans/modules_booking_plans_create",
  async payload => {
    const response = await apiService.modules_booking_plans_create(payload)
    return response.data
  }
)
export const modules_booking_plans_retrieve = createAsyncThunk(
  "bookingPlans/modules_booking_plans_retrieve",
  async payload => {
    const response = await apiService.modules_booking_plans_retrieve(payload)
    return response.data
  }
)
export const modules_booking_plans_update = createAsyncThunk(
  "bookingPlans/modules_booking_plans_update",
  async payload => {
    const response = await apiService.modules_booking_plans_update(payload)
    return response.data
  }
)
export const modules_booking_plans_partial_update = createAsyncThunk(
  "bookingPlans/modules_booking_plans_partial_update",
  async payload => {
    const response = await apiService.modules_booking_plans_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_booking_plans_destroy = createAsyncThunk(
  "bookingPlans/modules_booking_plans_destroy",
  async payload => {
    const response = await apiService.modules_booking_plans_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bookingPlansSlice = createSlice({
  name: "bookingPlans",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(modules_booking_plans_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_booking_plans_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_plans_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_plans_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_booking_plans_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_plans_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_plans_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_booking_plans_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_plans_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        modules_booking_plans_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_booking_plans_partial_update.fulfilled,
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
        modules_booking_plans_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_booking_plans_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_booking_plans_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(modules_booking_plans_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  modules_booking_plans_create,
  modules_booking_plans_retrieve,
  modules_booking_plans_update,
  modules_booking_plans_partial_update,
  modules_booking_plans_destroy,
  slice: bookingPlansSlice
}
