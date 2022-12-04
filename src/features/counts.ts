import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import Counts from '../class/count';

// Define a type for the slice state
interface CountsSlice {
  counts: Counts[]
}

// Define the initial state using that type
const initialState: CountsSlice= {
  counts: [],
}

export const countsSlice = createSlice({
  name: 'counts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    pushCounts: (state, action: PayloadAction<Counts>) =>
    {
      if(state.counts.filter(v=>v.name == action.payload.name).length == 0)
        state.counts.push(action.payload);
    },
    deleteCounts: (state, action: PayloadAction<Counts>) => {
      state.counts = state.counts.filter((value, index, array) =>
      {
        return value.name == action.payload.name;
      })
    },
    editCounts: (state, action: PayloadAction<{ old: Counts, new: Counts }>) =>
    {
      state.counts.map((value, index, array) =>
      {
        if (value.name == action.payload.old.name)
        {
          //to edit
          return action.payload.new;
        }
      })
    }
  },
})

export const { pushCounts, deleteCounts, editCounts } = countsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counts.counts

export default countsSlice.reducer