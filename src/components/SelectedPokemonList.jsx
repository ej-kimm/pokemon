import React from 'react'
import { StyledImageWrapper } from '../styles/components/StyledSelectedPokemonList'

export default function SelectedPokemonList() {
  const pokeballs = [
    { src: './images/pokeball.png', alt: 'pokeball' },
    { src: './images/pokeball.png', alt: 'pokeball' },
    { src: './images/pokeball.png', alt: 'pokeball' },
    { src: './images/pokeball.png', alt: 'pokeball' },
    { src: './images/pokeball.png', alt: 'pokeball' },
    { src: './images/pokeball.png', alt: 'pokeball' },
  ]

  return (
    <StyledImageWrapper>
      {pokeballs.map((pokeball, index) => (
        <div key={index}>
          <img src={pokeball.src} alt={pokeball.alt} />
        </div>
      ))}
    </StyledImageWrapper>
  )
}
