import React from 'react'
import {
  StyledDashboardContainer,
  StyledTitle,
} from '../styles/layouts/StyledDashboard'
import SelectedPokemonList from './SelectedPokemonList'

export default function Dashboard() {
  return (
    <StyledDashboardContainer>
      <StyledTitle>나만의 포켓몬</StyledTitle>
      <SelectedPokemonList />
    </StyledDashboardContainer>
  )
}
