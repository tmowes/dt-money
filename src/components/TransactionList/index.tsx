import { useTransactions } from '../../contexts'
import * as S from './styles'
import { TransactionListProps } from './types'

const TransactionList = (props: TransactionListProps) => {
  // const {} = props
  const { transactions } = useTransactions()

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
          {transactions.map(transaction => (
            <S.TableRow key={transaction.id}>
              <S.TableData>{transaction.title}</S.TableData>
              <S.TableData
                isPositive={transaction.type === 'deposit'}
                isNegative={transaction.type !== 'deposit'}
              >
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </S.TableData>
              <S.TableData>{transaction.category}</S.TableData>
              <S.TableData>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
              </S.TableData>
            </S.TableRow>
          ))}
        </S.Tbody>
      </S.Table>
    </S.Container>
  )
}

export default TransactionList
