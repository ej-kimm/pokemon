import React, { useEffect } from 'react'
import styled from 'styled-components'

const ErrorAlert = ({ message, setError }) => {
  useEffect(() => {
    if (!message) return

    const timer = setTimeout(() => {
      setError((prev) => ({ ...prev, show: false }))
    }, 3000)

    return () => clearTimeout(timer)
  }, [message, setError])

  return (
    <StyledWrapper>
      <div className="error">
        <div className="error__icon">
          <svg
            fill="none"
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
              fill="#393a37"
            />
          </svg>
        </div>
        <div className="error__title">{message}</div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .error {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    width: 320px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: start;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
    background: -webkit-linear-gradient(to right, #f45c43, #eb3349);
    background: linear-gradient(to right, #f45c43, #eb3349);
    box-shadow: 0 0px 10px #de1c3280;
    z-index: 99999999;
    opacity: 0;
    animation: slideIn 0.5s forwards, fadeOut 0.5s 2.5s forwards;
  }

  .error__icon {
    width: 20px;
    height: 20px;
    transform: translateY(-2px);
    margin-right: 15px;
    filter: drop-shadow(2px 1px 2px rgb(0 0 0 / 0.4));
  }

  .error__icon path {
    fill: #fff;
  }

  .error__title {
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  }

  @keyframes slideIn {
    0% {
      top: -50px;
      opacity: 0;
    }
    100% {
      top: 10px;
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top: -50px;
    }
  }
`

export default ErrorAlert
