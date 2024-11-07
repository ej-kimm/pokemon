import styled, { css } from 'styled-components'
import responsive from '../mixins/responsive'

export const StyledPokemonListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(116px, 1fr));
  background-color: var(--beige);
  border-radius: 8px;
  padding: 20px;
  gap: 8px;

  ${responsive(
    'T',
    css`
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      padding: 40px 60px;
      gap: 20px;
    `
  )}

  ${responsive(
    'D',
    css`
      gap: 30px;
    `
  )}
`
