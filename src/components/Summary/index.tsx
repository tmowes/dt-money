import { useTransactions } from '../../contexts'
import cardsData from './cardsData'
import * as S from './styles'
import { SummaryProps } from './types'

const Summary = (props: SummaryProps) => {
  // const {} = props
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  }
  )

  const cardValue = Object.values(summary)

  return (
    <S.Container>
      {cardsData.map((card, index) => (
        <S.Card key={card.title} isTotal={card.title === 'Total'}>
          <S.Header>
            <S.Title>{card.title}</S.Title>
            <S.Icon src={card.icon} alt={card.title} />
          </S.Header>
          <S.Value>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(cardValue[index])}
          </S.Value>
        </S.Card>
      ))}
    </S.Container>
  )
}

export default Summary
