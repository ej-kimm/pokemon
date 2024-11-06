import styled, { css } from 'styled-components'
import { flexbox } from '../mixins/flexbox'
import responsive from '../mixins/responsive'

export const StyledDashboardContainer = styled.header`
  ${flexbox()}
  flex-direction: column;
  width: 100%;
  padding: 15px;
  background-color: var(--blue-light);
  border-radius: 8px;

  ${responsive(
    'T',
    css`
      padding: 30px;
    `
  )}
`
export const StyledTitle = styled.h2`
  color: var(--blue-dark);
  margin-bottom: 20px;

  ${responsive(
    'T',
    css`
      font-size: 40px;
      margin-bottom: 30px;
    `
  )}

  ${responsive(
    'D',
    css`
      font-size: 50px;
      margin-bottom: 40px;
    `
  )}
`
