import React from 'react'
import {
  BackgroundContainer,
  Button,
  ButtonWrapper,
  Logo,
} from '../styles/layouts/StyledHome'

export default function Home() {
  return (
    <BackgroundContainer>
      <ButtonWrapper>
        <Logo src="./pokemon_logo.png" alt="pokemon_logo" />
        <Button type="button">포켓몬 도감 GO</Button>
      </ButtonWrapper>
    </BackgroundContainer>
  )
}
