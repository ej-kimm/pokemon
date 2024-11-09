import React from 'react'
import PokemonCard from './PokemonCard'
import { StyledPokemonListContainer } from '../styles/layouts/StyledPokemonList'
import { Link } from 'react-router-dom'

export default function PokemonList({ pokemons, onSelectPokemon }) {
  return (
    <StyledPokemonListContainer>
      {pokemons.map((pokemon) => (
        <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
          <PokemonCard
            pokemon={pokemon}
            onSelect={onSelectPokemon}
            action="select"
          />
        </Link>
      ))}
    </StyledPokemonListContainer>
  )
}
