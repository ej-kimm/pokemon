import { css } from 'styled-components'

const flexMap = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  stretch: 'stretch',
  center: 'center',
}

function getFlexValue(key = 'center') {
  return flexMap[key]
}

export function flexbox(jc = 'center', ai = 'center') {
  return css`
    display: flex;
    justify-content: ${getFlexValue(jc)};
    align-items: ${getFlexValue(ai)};
  `
}

export function inlineFlexbox(jc = 'center', ai = 'center') {
  return css`
    display: inline-flex;
    justify-content: ${getFlexValue(jc)};
    align-items: ${getFlexValue(ai)};
  `
}
