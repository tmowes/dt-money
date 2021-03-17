import * as S from './styles'
import { TransactionListProps } from './types'

const TransactionList = (props: TransactionListProps) => {
  // const {} = props
  return (
    <S.Container>
      <S.Table>
        <S.Thead>
          <S.TableRow>
            <S.TableHeader>Titulo</S.TableHeader>
            <S.TableHeader>Valor</S.TableHeader>
            <S.TableHeader>Categoria</S.TableHeader>
            <S.TableHeader>Data</S.TableHeader>
          </S.TableRow>
        </S.Thead>
        <S.Tbody>
          <S.TableRow>
            <S.TableData>Programa</S.TableData>
            <S.TableData isPositive={true}>R$6900,00</S.TableData>
            <S.TableData>Lazer</S.TableData>
            <S.TableData>12/03/2021</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>Hamburger</S.TableData>
            <S.TableData isNegative={true}>-R$69,00</S.TableData>
            <S.TableData>Comida</S.TableData>
            <S.TableData>12/03/2021</S.TableData>
          </S.TableRow>
        </S.Tbody>
      </S.Table>
    </S.Container>
  )
}

export default TransactionList
