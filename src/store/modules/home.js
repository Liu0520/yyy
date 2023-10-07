import { getHomeGoodPriceData } from "@/services/modules/home"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  async (payload) => {
    const res = await getHomeGoodPriceData()
    // console.log(res)
    return res
  }
)

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      // console.log(state.goodPriceInfo)
      state.goodPriceInfo = payload
    },
  },
})

export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer
