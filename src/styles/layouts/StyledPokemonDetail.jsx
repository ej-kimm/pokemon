import styled, { css } from 'styled-components'
import { flexbox } from '../mixins/flexbox'
import responsive from '../mixins/responsive'
import { blobBounce } from '../animations/animations'

export const StyledPokemonDetailContainer = styled.div`
  ${flexbox()}
  height: 100vh;
`

export const StyledPokemonCardBox = styled.div`
  position: relative;
  width: 250px;
  height: auto;
  border-radius: 14px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 11px 61px 7px rgba(212, 207, 192, 0.77);
  -webkit-box-shadow: 10px 11px 61px 7px rgba(212, 207, 192, 0.77);
  -moz-box-shadow: 10px 11px 61px 7px rgba(212, 207, 192, 0.77);

  ${responsive(
    'T',
    css`
      width: 500px;
      height: 500px;
    `
  )}

  ${responsive(
    'D',
    css`
      width: 600px;
      height: 600px;
    `
  )}
`

export const StyledBackground = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  z-index: 50;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
`

export const StyledBlob = styled.div`
  position: absolute;
  z-index: 40;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--pink);
  opacity: 1;
  filter: blur(12px);
  animation: ${blobBounce} 5s infinite ease;

  ${responsive(
    'T',
    css`
      width: 280px;
      height: 280px;
      filter: blur(20px);
      transform: scale(1.3);
    `
  )}
  ${responsive(
    'D',
    css`
      width: 350px;
      height: 350px;
      filter: blur(24px);
      transform: scale(1.6);
    `
  )}
`

export const StyledContent = styled.div`
  position: relative;
  z-index: 60;
  text-align: center;
  color: #333;
  padding: 20px;

  & img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 16px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  & h2 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }

  & p {
    margin: 8px 0;
    font-size: 14px;
    color: #666;
  }

  & button {
    margin-top: 10px;
  }

  ${responsive(
    'T',
    css`
      & img {
        width: 200px;
        height: 200px;
        margin-bottom: 30px;
      }

      & h2 {
        font-size: 30px;
      }

      & p {
        margin: 15px 0;
        font-size: 18px;
      }

      & button {
        margin-top: 20px;
      }
    `
  )}

  ${responsive(
    'D',
    css`
      & img {
        width: 260px;
        height: 260px;
      }

      & h2 {
        font-size: 40px;
      }

      & p {
        margin: 20px 0;
        font-size: 20px;
      }

      & button {
        margin-top: 20px;
      }
    `
  )}
`
