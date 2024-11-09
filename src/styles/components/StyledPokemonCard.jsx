import styled, { css } from 'styled-components'
import { flexbox } from '../mixins/flexbox'
import responsive from '../mixins/responsive'

export const StyledPokemonCardBox = styled.div`
  ${flexbox()}
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  padding: 10px;
  gap: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 300ms ease, transform 300ms ease,
    background-color 800ms ease;
  z-index: 20;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.2);
    background-color: #e3e6cc;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ffffff;
    opacity: 0.7;
    transition: transform 400ms ease-out, opacity 400ms ease-out;
    z-index: 10;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(20);
    opacity: 0;
  }

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

  & button {
    z-index: 30;
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
