import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    /*height: 100%;
    background-color: ${colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    margin-top: 4rem;
  `}
`


export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`

export const Thead = styled.thead``

export const TableRow = styled.tr``

export const TableHeader = styled.th`
${({ theme: { colors } }) => css`
    color: ${colors.textBody};
    font-weight: 400;
    text-align: left;
    padding: 1rem 2rem;
    line-height: 1.5rem;
  `}
  `

export const Tbody = styled.tbody``

export const TableData = styled.td<{ isNegative?: boolean, isPositive?: boolean }>`
${({ isPositive, isNegative, theme: { colors } }) => css`
    color: ${colors.textBody};
    background-color: ${colors.shape};
    padding: 1rem 2rem;
    border:0;
    &:first-child{
      border-top-left-radius: 0.5rem;
      color: ${colors.textTitle};
      border-bottom-left-radius: 0.5rem;
    }
    &:last-child{
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
    ${isNegative && css`
      color: ${colors.red};
    `}
    ${isPositive && css`
      color: ${colors.green};
    `}
  `}`
