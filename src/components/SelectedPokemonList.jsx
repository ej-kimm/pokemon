import React from 'react'
import {
  StyledPokeballCard,
  StyledImageWrapper,
} from '../styles/components/StyledSelectedPokemonList'
import PokemonCard from './PokemonCard'
import { Link } from 'react-router-dom'

export default function SelectedPokemonList({ selectedPokemonList, onRemove }) {
  const defaultPokeball = {
    src: './images/pokeball.png',
    alt: 'pokeball',
  }

  return (
    <StyledImageWrapper>
      {selectedPokemonList.map((pokemon) => (
        <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onRemove={onRemove}
            action="remove"
          />
        </Link>
      ))}
      {Array(6 - selectedPokemonList.length)
        .fill(defaultPokeball)
        .map((pokeball, index) => (
          <StyledPokeballCard key={index}>
            <img src={pokeball.src} alt={pokeball.alt} />
          </StyledPokeballCard>
        ))}
    </StyledImageWrapper>
  )
}
