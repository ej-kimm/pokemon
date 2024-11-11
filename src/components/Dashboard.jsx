import React from 'react'
import {
  StyledDashboardContainer,
  StyledTitle,
} from '../styles/layouts/StyledDashboard'
import SelectedPokemonList from './SelectedPokemonList'
import { useSelector } from 'react-redux'
import ErrorAlert from './../styles/modules/ErrorAlert'

export default function Dashboard() {
  const { error } = useSelector((state) => state.pokemon)

  return (
    <StyledDashboardContainer>
      {error.show && <ErrorAlert message={error.message} />}
      <StyledTitle>나만의 포켓몬</StyledTitle>
      <SelectedPokemonList />
    </StyledDashboardContainer>
  )
}
