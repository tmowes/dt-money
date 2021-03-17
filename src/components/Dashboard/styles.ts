import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme: { colors } }) => css`
    max-width: 1120px;
    margin: 0 auto;
    padding:2.5rem 1rem;
    background-color: ${colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
`
