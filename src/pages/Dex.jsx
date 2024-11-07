import React, { useEffect, useState } from 'react'
import Dashboard from './../components/Dashboard'
import PokemonList from './../components/PokemonList'
import { StyledDexLayout } from './../styles/layouts/StyledDex'
import ErrorAlert from '../styles/modules/ErrorAlert'

export default function Dex() {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemonList, setSelectedPokemonList] = useState([])
  const [error, setError] = useState({ message: '', show: false })

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemonList((prev) => {
      if (prev.length >= 6) {
        setError({ message: '최대 여섯 개까지만 추가 가능합니다', show: true })
        return prev
      }
      if (prev.find((p) => p.id === pokemon.id)) {
        setError({
          message: `${pokemon.korean_name}은(는) 이미 추가되었습니다`,
          show: true,
        })
        return prev
      }
      return [...prev, pokemon]
    })
  }

  const handleRemovePokemon = (id) => {
    setSelectedPokemonList(
      selectedPokemonList.filter((pokemon) => pokemon.id !== id)
    )
  }

  useEffect(() => {
    fetch('data/pokemons.json')
      .then((res) => res.json())
      .then((data) => setPokemons(data))
  }, [])

  return (
    <StyledDexLayout>
      {error.show && <ErrorAlert message={error.message} setError={setError} />}
      <Dashboard
        selectedPokemonList={selectedPokemonList}
        onRemovePokemon={handleRemovePokemon}
      />
      <PokemonList pokemons={pokemons} onSelectPokemon={handleSelectPokemon} />
    </StyledDexLayout>
  )
}
