import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from '../modules/pokemonSlice'

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
})

export default store
