import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import Action from '../class/actions';

// Define a type for the slice state
interface ActionsSlice {
  actions: Action[]
}

// Define the initial state using that type
const initialState: ActionsSlice= {
  actions: [],
}

export const actionsSlice = createSlice({
  name: 'counts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    pushAction: (state, action: PayloadAction<Action>) =>
    {
      if(state.actions.filter(v=>v == action.payload).length == 0)
        state.actions.push(action.payload);
    },
    deleteAction: (state, action: PayloadAction<Action>) => {
      state.actions = state.actions.filter((value, index, array) =>
      {
        return value == action.payload;
      })
    },
    editAction: (state, action: PayloadAction<{ old: Action, new: Action }>) =>
    {
      state.actions.map((value, index, array) =>
      {
        if (value == action.payload.old)
        {
          //to edit
          return action.payload.new;
        }
      })
    }
  },
})

export const { pushAction, deleteAction, editAction } = actionsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAction = (state: RootState) => state.actions.actions

export default actionsSlice.reducer