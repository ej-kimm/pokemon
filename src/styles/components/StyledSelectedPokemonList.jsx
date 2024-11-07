import styled, { css } from 'styled-components'
import { flexbox } from '../mixins/flexbox'
import responsive from '../mixins/responsive'

export const StyledImageWrapper = styled.div`
  ${flexbox()}
  width: 240px;
  flex-wrap: wrap;
  gap: 20px;

  ${responsive(
    'T',
    css`
      width: 100%;
      gap: 40px;
    `
  )}

  ${responsive(
    'D',
    css`
      gap: 65px;
    `
  )}
`

export const StyledPokeballCard = styled.div`
  padding: 10px;
  border: 2px dashed #a6aebf;
  border-radius: 8px;
  background-color: #e0e2e7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  & img {
    display: block;
    width: 40px;
    height: auto;
  }

  ${responsive(
    'T',
    css`
      & img {
        width: 50px;
      }
    `
  )}

  ${responsive(
    'D',
    css`
      padding: 20px;

      & img {
        width: 80px;
      }
    `
  )}
`
