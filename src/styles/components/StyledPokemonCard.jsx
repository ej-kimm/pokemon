import styled, { css } from 'styled-components'
import { flexbox } from '../mixins/flexbox'
import responsive from '../mixins/responsive'

export const StyledPokemonCardBox = styled.div`
  ${flexbox()}
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  padding: 10px;
  gap: 10px;
  border-radius: 5px;

  & div {
    ${flexbox()}
    flex-direction: column;
    gap: 5px;
  }

  & img {
    display: block;
    width: 100%;
    height: auto;
  }

  ${responsive(
    'T',
    css`
      padding: 20px;
      gap: 15px;

      & div {
        font-size: 20px;
      }
    `
  )}

  ${responsive(
    'D',
    css`
      gap: 20px;
    `
  )}
`
