import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  StyledBackgroundContainer,
  StyledButtonWrapper,
  StyledLogo,
} from './../styles/layouts/StyledHome'
import Button from '../components/Button'

export default function Home() {
  const navigate = useNavigate()

  return (
    <StyledBackgroundContainer>
      <StyledButtonWrapper>
        <StyledLogo src="./images/pokemon_logo.png" alt="pokemon_logo" />
        <Button size="large" action="start" onClick={() => navigate('/dex')}>
          포켓몬 도감 GO
        </Button>
      </StyledButtonWrapper>
    </StyledBackgroundContainer>
  )
}
