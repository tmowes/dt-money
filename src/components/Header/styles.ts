import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.blue};
  `}
`
export const Content = styled.div`
  ${({ theme: { colors } }) => css`
    max-width: 1120px;
    margin: 0 auto;
    padding:2rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Logo = styled.img``

export const Button = styled.button`
${({ theme: { colors, shadows } }) => css`
    font-size: 1rem;
    color: ${colors.textTitle};
    background: ${colors.blueLight};
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
    -webkit-box-shadow: ${shadows.smooth};
    box-shadow: ${shadows.smooth};
    transition: 180ms ease-in-out;
    &:hover {
      filter: brightness(1.12);
      transform: scale(1.01);
    }
    &:active {
      transform: scale(0.99);
      filter: brightness(0.88);
    }
  `}
`
