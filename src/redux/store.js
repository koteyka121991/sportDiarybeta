// хранилище редакс
import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoadingSlice'
import filter from './slices/filterSlice'

// переменая store это редакс хранилище
export const store = configureStore({
  reducer: { 
    isLoading,
    filter
  },
})