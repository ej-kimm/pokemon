import React from 'react'
import Dashboard from './../components/Dashboard'
import PokemonList from './../components/PokemonList'
import { StyledDexLayout } from './../styles/layouts/StyledDex'
import { Provider } from 'react-redux'
import store from '../redux/config/configStore'

export default function Dex() {
  return (
    <StyledDexLayout>
      <Provider store={store}>
        <Dashboard />
        <PokemonList />
      </Provider>
    </StyledDexLayout>
  )
}
