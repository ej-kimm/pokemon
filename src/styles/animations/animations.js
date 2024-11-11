import { keyframes } from 'styled-components'

export const jelloVertical = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(0.75, 1.25, 1);
  }
  40% {
    transform: scale3d(1.25, 0.75, 1);
  }
  50% {
    transform: scale3d(0.85, 1.15, 1);
  }
  65% {
    transform: scale3d(1.05, 0.95, 1);
  }
  75% {
    transform: scale3d(0.95, 1.05, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`

export const blobBounce = keyframes`
  0% {
    transform: translate(-100%, -100%) translate3d(0, -30%, 0);
  }
  25% {
    transform: translate(-100%, -100%) translate3d(100%, -30%, 0);
  }
  50% {
    transform: translate(-100%, -100%) translate3d(100%, 130%, 0);
  }
  75% {
    transform: translate(-100%, -100%) translate3d(0, 130%, 0);
  }
  100% {
    transform: translate(-100%, -100%) translate3d(0, -30%, 0);
  }
`
