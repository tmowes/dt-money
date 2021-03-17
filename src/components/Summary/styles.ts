import styled, { css } from 'styled-components'

export const Container = styled.div`
    /* width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between; */
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    margin-top: -8rem;
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
  ${isTotal && css`
    background: ${colors.green};
  `}
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
