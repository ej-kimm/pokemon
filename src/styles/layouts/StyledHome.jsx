import styled from 'styled-components'

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
  width: 700px;
  height: auto;
`
export const Button = styled.button`
  padding: 18px 36px;
  background-color: var(--blue);
  color: var(--white);
  font-size: 25px;
  border-radius: 5px;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: var(--blue-dark);
  }
`
