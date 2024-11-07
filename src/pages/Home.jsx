import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  StyledBackgroundContainer,
  StyledButton,
  StyledButtonWrapper,
  StyledLogo,
} from './../styles/layouts/StyledHome'

export default function Home() {
  const navigate = useNavigate()

  return (
    <StyledBackgroundContainer>
      <StyledButtonWrapper>
        <StyledLogo src="./images/pokemon_logo.png" alt="pokemon_logo" />
        <StyledButton type="button" onClick={() => navigate('/dex')}>
          포켓몬 도감 GO
        </StyledButton>
      </StyledButtonWrapper>
    </StyledBackgroundContainer>
  )
}
