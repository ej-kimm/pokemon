import { css, styled } from 'styled-components'
import responsive from '../mixins/responsive'

export const StyledDexLayout = styled.section`
  padding: 20px;

  ${responsive(
    'T',
    css`
      padding: 30px;
    `
  )}
`
