import { configureStore } from '@reduxjs/toolkit'
import navReducer from './slices/navSlice';

export const store = configureStore({
    reducer: {
        nav: navReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 }
  })
})