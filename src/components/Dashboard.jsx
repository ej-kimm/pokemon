import React from 'react'
import {
  StyledDashboardContainer,
  StyledTitle,
} from '../styles/layouts/StyledDashboard'
import SelectedPokemonList from './SelectedPokemonList'
import { usePokemon } from '../context/PokemonContext'
import ErrorAlert from '../styles/modules/ErrorAlert'

export default function Dashboard() {
  const { error, setError } = usePokemon()

  return (
    <StyledDashboardContainer>
      {error.show && <ErrorAlert message={error.message} setError={setError} />}
      <StyledTitle>나만의 포켓몬</StyledTitle>
      <SelectedPokemonList />
    </StyledDashboardContainer>
  )
}
