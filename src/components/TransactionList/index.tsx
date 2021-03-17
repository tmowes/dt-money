import { useEffect, useState } from 'react'
import api from '../../services/api'
import * as S from './styles'
import { Transaction, TransactionListProps } from './types'

const TransactionList = (props: TransactionListProps) => {
  // const {} = props
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const loadTransactions = async ()=>{
      const{data} = await api.get('/transactions')
      setTransactions(data)
    }    
    loadTransactions ()
  }, [])
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
            {transactions.map(transaction=>(
          <S.TableRow>
              <S.TableData>{transaction.title}</S.TableData>
            <S.TableData isPositive={transaction.type==='deposit'}>{transaction.amount}</S.TableData>
            <S.TableData>{transaction.category}</S.TableData>
            <S.TableData>{transaction.createdAt}</S.TableData>
          </S.TableRow>
            ))}
        </S.Tbody>
      </S.Table>
    </S.Container>
  )
}

export default TransactionList
