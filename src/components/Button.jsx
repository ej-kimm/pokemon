import { StyledButton } from '../styles/modules/StyledButtons'

const Button = ({ type = 'button', size = 'small', onClick, children }) => {
  return (
    <StyledButton type={type} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
