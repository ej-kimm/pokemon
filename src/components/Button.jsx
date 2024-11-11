import { StyledButton } from '../styles/modules/StyledButtons'

const Button = ({
  type = 'button',
  size = 'small',
  action,
  onClick,
  children,
}) => {
  return (
    <StyledButton type={type} size={size} action={action} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
