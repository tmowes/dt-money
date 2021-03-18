import { lighten, transparentize } from 'polished'
import styled, { css } from 'styled-components'
import { RadioStyleProps } from './types'

const activeColors = {
  red: '#E52E4D',
  green: '#33CC95',
}

export const Container = styled.button<RadioStyleProps>`
  ${({ isActive, activeColor }) => css`
    width: 100%;
    height: 4rem;
    border: 2px solid #d7d7d750;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 180ms ease-in-out;
    background: transparent;
    ${isActive && css`
      background: ${transparentize(0.8, activeColors[activeColor])};
    `}
    &:hover {
      border-color: ${lighten(0.2, '#d7d7d750')};
    }
  `}

`
export const Icon = styled.img`
  width: 32px;
  height: 32px;
`

export const Title = styled.span`
  ${({ theme: { colors } }) => css`
    display: inline-block;
    color: ${colors.textTitle};
    font-size: 1rem;
    margin-left: 1rem;
  `}
`
