import styled, { css } from 'styled-components'
import responsive from '../mixins/responsive'
import { flexbox } from '../mixins/flexbox'

export const StyledBackgroundContainer = styled.div`
  height: 100vh;
  background-image: url(./pokemon_background.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`
export const StyledButtonWrapper = styled.div`
  ${flexbox()}
  flex-direction: column;
  width: 100%;
  height: 100vh;
  gap: 15px;
`
export const StyledLogo = styled.img`
  display: block;
  width: 300px;
  height: auto;

  ${responsive(
    'T',
    css`
      width: 700px;
    `
  )}
`
export const StyledButton = styled.button`
  font-size: 16px;
  padding: 12px 24px;
  background-color: var(--blue);
  color: var(--white);
  border-radius: 5px;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: var(--blue-dark);
  }

  ${responsive(
    'T',
    css`
      font-size: 25px;
      padding: 18px 36px;
    `
  )}
`
