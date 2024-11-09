import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  StyledBackgroundContainer,
  StyledButtonWrapper,
  StyledLogo,
} from './../styles/layouts/StyledHome'
import { StyledButton } from '../styles/modules/StyledButtons'

export default function Home() {
  const navigate = useNavigate()

  return (
    <StyledBackgroundContainer>
      <StyledButtonWrapper>
        <StyledLogo src="./images/pokemon_logo.png" alt="pokemon_logo" />
        <StyledButton
          type="button"
          action="start"
          size="large"
          onClick={() => navigate('/dex')}
        >
          포켓몬 도감 GO
        </StyledButton>
      </StyledButtonWrapper>
    </StyledBackgroundContainer>
  )
}
