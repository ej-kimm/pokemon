import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { StyledPokemonListContainer } from '../styles/layouts/StyledPokemonList'

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('data/pokemons.json')
      .then((res) => res.json())
      .then((data) => setPokemons(data))
  }, [])

  return (
    <StyledPokemonListContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </StyledPokemonListContainer>
  )
}
