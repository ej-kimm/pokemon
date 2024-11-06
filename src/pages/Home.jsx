import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BackgroundContainer,
  Button,
  ButtonWrapper,
  Logo,
} from '../styles/layouts/StyledHome'

export default function Home() {
  const navigate = useNavigate()

  return (
    <BackgroundContainer>
      <ButtonWrapper>
        <Logo src="./pokemon_logo.png" alt="pokemon_logo" />
        <Button type="button" onClick={() => navigate('/dex')}>
          포켓몬 도감 GO
        </Button>
      </ButtonWrapper>
    </BackgroundContainer>
  )
}
