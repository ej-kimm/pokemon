import React from 'react'
import PokemonCard from './PokemonCard'
import { StyledPokemonListContainer } from '../styles/layouts/StyledPokemonList'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function PokemonList() {
  const [pokemons] = useFetch()

  return (
    <StyledPokemonListContainer>
      {pokemons.map((pokemon) => (
        <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
          <PokemonCard pokemon={pokemon} action="select" />
        </Link>
      ))}
    </StyledPokemonListContainer>
  )
}
