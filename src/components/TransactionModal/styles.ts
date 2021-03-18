import styled, { css } from 'styled-components'

export const Form = styled.form`
`

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    color: ${colors.textTitle};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  `}
`
export const TypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
  gap: 1rem;
`

export const Input = styled.input`
  ${({ theme: { colors } }) => css`
    width: 100%;
    padding:0 1.5rem;
    height: 4rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    background: ${colors.inputs};
    color: ${colors.textTitle};
    border: 2px solid #d7d7d750;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: ${colors.textBody};
    }
  `}
`

export const Button = styled.button`
  ${({ theme: { colors, shadows } }) => css`
    width: 100%;
    padding:0 1.5rem;
    height: 4rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    background: ${colors.green};
    color: ${colors.textBody};
    font-weight: 600;
    font-size: 1rem;
    border: 0;
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

export const CloseButton = styled.button``

export const CloseIcon = styled.img``
