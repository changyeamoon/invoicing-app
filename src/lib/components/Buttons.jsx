import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div.attrs(props => ({
  className: 'primary',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem 0.4rem;
  font-size: 1rem;
  letter-spacing: 0.125rem;
  border-radius: 0.3rem;
  cursor: pointer;
  font-weight: 700;
  box-shadow: 0px 4px 5px #888888;

  &:active {
    box-shadow: 0px 2px 5px #666666;
    transform: translateY(3px);
  }
`

export function Button({ onClick, children, className }) {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  )
}
