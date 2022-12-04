import { configureStore } from '@reduxjs/toolkit'
import countsSlice from '../features/counts';
import actionsSlice from '../features/actions';

const persistedState = localStorage.getItem('state') 
  ? JSON.parse(localStorage.getItem('state') as string)
  : {}

const store = configureStore({
  reducer: {
    counts: countsSlice,
    actions: actionsSlice
  },
  preloadedState:persistedState
})

store.subscribe(() => {
  let toSave = store.getState()
  localStorage.setItem('state', JSON.stringify(toSave))
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;