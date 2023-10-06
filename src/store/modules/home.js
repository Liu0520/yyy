import { createSlice } from "@reduxjs/toolkit"

const homeSlice = createSlice({
  name: "home",
  initialState: {
    productList: [],
    value: 0
  },
  reducers: {
    increment: state => {
      state.value +=1
    },
    decrement: state => {
      state.value -=1
    },
    incrementBycount: (state, action) => {
      state.value += action.payload
    }
  },
})

export const {increment, decrement, incrementBycount} = homeSlice.actions
export default homeSlice.reducer
