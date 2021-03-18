import * as S from './styles'
import { TransactionTypeProps } from './types'

const TransactionType = (props: TransactionTypeProps) => {
  const { icon, title, onClick, isActive,activeColor } = props
  return (
    <S.Container
      type='button'
      onClick={onClick}
      isActive={isActive}
      activeColor={activeColor}
    >
      <S.Icon src={icon} alt={title} />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

export default TransactionType
