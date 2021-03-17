import cardsData from './cardsData'
import * as S from './styles'
import { SummaryProps } from './types'

const Summary = (props: SummaryProps) => {
  // const {} = props
  return (
    <S.Container>
      {cardsData.map(card => (
        <S.Card key={card.title} isTotal={card.title === 'Total'}>
          <S.Header>
            <S.Title>{card.title}</S.Title>
            <S.Icon src={card.icon} alt={card.title} />
          </S.Header>
          <S.Value>{card.value}</S.Value>
        </S.Card>
      ))}
    </S.Container>
  )
}

export default Summary
