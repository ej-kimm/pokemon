import React, { useEffect, useState } from 'react'
import {
  StyledPokeballCard,
  StyledImageWrapper,
} from '../styles/components/StyledSelectedPokemonList'
import PokemonCard from './PokemonCard'

export default function SelectedPokemonList({ selectedPokemonList }) {
  const defaultPokeball = {
    src: './images/pokeball.png',
    alt: 'pokeball',
    isPokemon: false,
  }

  const [pokeballs, setPokeballs] = useState(Array(6).fill(defaultPokeball))

  useEffect(() => {
    const updatedPokeballs = selectedPokemonList
      .map((pokemon) => ({ ...pokemon, isPokemon: true }))
      .concat(Array(6 - selectedPokemonList.length).fill(defaultPokeball))

    setPokeballs(updatedPokeballs)
  }, [selectedPokemonList])

  return (
    <StyledImageWrapper>
      {pokeballs.map((pokeball, index) =>
        pokeball.isPokemon ? (
          <PokemonCard
            key={selectedPokemonList[index].id}
            pokemon={selectedPokemonList[index]}
            action="remove"
          />
        ) : (
          <StyledPokeballCard key={index}>
            <img src={pokeball.src} alt={pokeball.alt} />
          </StyledPokeballCard>
        )
      )}
    </StyledImageWrapper>
  )
}
