import styled, { css } from 'styled-components'

export const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
  margin-top: -8rem;
  width:100%;
`

export const Title = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.textTitle};
    font-size: 1.2rem;
  `}
`

export const Card = styled.div<{ isTotal: boolean }>`
  ${({ isTotal, theme: { colors } }) => css`
    background: ${colors.shape};
    padding:  1.5rem 2rem;
    border-radius: 0.5rem;
    transition: 180ms ease-in-out;
    ${isTotal && css`
      background: ${colors.green};
    `}
    &:hover{
      filter: brightness(1.12);
      transform: scale(1.01);
    }
  `}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.img``

export const Value = styled.strong`
  display: block;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 2rem;
  line-height: 3rem;
`
