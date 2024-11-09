import styled, { css } from 'styled-components'
import responsive from '../mixins/responsive'
import { flexbox } from '../mixins/flexbox'

export const StyledBackgroundContainer = styled.div`
  height: 100vh;
  background-image: url(./images/pokemon_background.png);
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
