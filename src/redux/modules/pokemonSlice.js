import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedPokemonList: [],
  error: { message: '', show: false },
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.selectedPokemonList.length >= 6) {
        state.error = {
          message: '최대 여섯 개까지만 추가 가능합니다',
          show: true,
        }
        return
      }
      if (state.selectedPokemonList.find((p) => p.id === action.payload.id)) {
        state.error = {
          message: `${action.payload.korean_name}은(는) 이미 추가되었습니다`,
          show: true,
        }
        return
      }

      state.selectedPokemonList.push(action.payload)
      state.error = { message: '', show: false }
    },

    removePokemon: (state, action) => {
      state.selectedPokemonList = state.selectedPokemonList.filter(
        (pokemon) => pokemon.id !== action.payload
      )
    },

    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { addPokemon, removePokemon, setError } = pokemonSlice.actions
export default pokemonSlice.reducer
