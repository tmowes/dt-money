import logo from '../../assets/logo.svg'
import * as S from './styles'
import { HeaderProps } from './types'

const Header = (props: HeaderProps) => {
  // const { } = props
  return (
    <S.Container>
      <S.Content>

        <S.Logo src={logo} alt='dt money' />
        <S.Button type="button">
          Nova Transação
      </S.Button>
      </S.Content>
    </S.Container>
  )
}

export default Header
