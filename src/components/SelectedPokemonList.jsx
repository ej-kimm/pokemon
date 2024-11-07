import React from 'react'
import { StyledImageWrapper } from '../styles/components/StyledSelectedPokemonList'
import PokeBallImage from './PokeBallImage'

export default function SelectedPokemonList() {
  return (
    <StyledImageWrapper>
      <PokeBallImage src={'./images/pokeball.png'} alt={'pokeball'} />
      <PokeBallImage src={'./images/pokeball.png'} alt={'pokeball'} />
      <PokeBallImage src={'./images/pokeball.png'} alt={'pokeball'} />
      <PokeBallImage src={'./images/pokeball.png'} alt={'pokeball'} />
      <PokeBallImage src={'./images/pokeball.png'} alt={'pokeball'} />
      <PokeBallImage src={'./images/pokeball.png'} alt={'pokeball'} />
    </StyledImageWrapper>
  )
}
