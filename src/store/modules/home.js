import { getHomeGoodPriceData } from "@/services/modules/home"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  async (extraInfo, { dispatch, getState }) => {
    // 方法一：直接调用dispatch
    // const res = await getHomeGoodPriceData()
    // console.log(res)
    // dispatch(changeGoodPriceInfoAction(res))
    // return res

    // 方法二：使用extraReducers
    const res = await getHomeGoodPriceData()
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
      console.log('change')
      console.log(state, payload)
      state.goodPriceInfo = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer
