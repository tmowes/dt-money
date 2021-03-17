import logo from '../../assets/logo.svg'
import * as S from './styles'
import { HeaderProps } from './types'

const Header = (props: HeaderProps) => {
  const { setIsModalOpen } = props
  return (
    <S.Container>
      <S.Content>
        <S.Logo src={logo} alt='dt money' />
        <S.Button type="button" onClick={()=> setIsModalOpen(true)} >
          Nova Transação
      </S.Button>
      </S.Content>
    </S.Container>
  )
}

export default Header
