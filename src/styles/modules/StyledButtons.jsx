import styled, { css } from 'styled-components'
import responsive from '../mixins/responsive'

export const StyledButton = styled.button`
  font-size: 16px;
  padding: ${(props) => (props.size === 'large' ? '12px 24px' : '8px 15px')};
  background-color: ${(props) =>
    props.action === 'start' ? 'var(--blue)' : 'var(--pink)'};
  color: var(--white);
  border-radius: 5px;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.action === 'start' ? 'var(--blue-dark)' : 'var(--pink-dark)'};
  }

  ${responsive(
    'T',
    css`
      font-size: ${(props) => (props.size === 'large' ? '25px' : '20px')};
      padding: ${(props) =>
        props.size === 'large' ? '18px 36px' : '8px 15px'};
    `
  )}
`
