import { css } from 'styled-components'

const breakpoints = {
  T: '768px', // tablet
  D: '1200px', // desktop
}

export default function responsive(screen, styles) {
  switch (screen) {
    case 'T':
      return css`
        @media screen and (min-width: ${breakpoints.T}) {
          ${styles}
        }
      `
    case 'D':
      return css`
        @media screen and (min-width: ${breakpoints.D}) {
          ${styles}
        }
      `
    default:
      return null
  }
}
