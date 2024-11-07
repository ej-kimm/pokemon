import React from 'react'
import PokemonCard from './PokemonCard'
import { StyledPokemonListContainer } from '../styles/layouts/StyledPokemonList'

export default function PokemonList({ pokemons, onSelectPokemon }) {
  return (
    <StyledPokemonListContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onSelect={onSelectPokemon}
          action="select"
        />
      ))}
    </StyledPokemonListContainer>
  )
}
