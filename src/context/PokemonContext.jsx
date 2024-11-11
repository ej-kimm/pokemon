import { createContext, useContext, useState } from 'react'

export const PokemonContext = createContext()

export function PokemonProvider({ children }) {
  const [selectedPokemonList, setSelectedPokemonList] = useState([])
  const [error, setError] = useState({ message: '', show: false })

  const addPokemon = (pokemon) => {
    if (selectedPokemonList.length >= 6) {
      setError({ message: '최대 여섯 개까지만 추가 가능합니다', show: true })
      return
    }
    if (selectedPokemonList.find((p) => p.id === pokemon.id)) {
      setError({
        message: `${pokemon.korean_name}은(는) 이미 추가되었습니다`,
        show: true,
      })
      return
    }

    setSelectedPokemonList((prev) => [...prev, pokemon])
  }

  const removePokemon = (id) => {
    setSelectedPokemonList((prev) =>
      prev.filter((pokemon) => pokemon.id !== id)
    )
  }

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemonList,
        error,
        addPokemon,
        removePokemon,
        setError,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext)
