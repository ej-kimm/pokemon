import styled, { css } from 'styled-components'
import responsive from '../mixins/responsive'

export const BackgroundContainer = styled.div`
  height: 100vh;
  background-image: url(./pokemon_background.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 15px;
`
export const Logo = styled.img`
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
export const Button = styled.button`
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
