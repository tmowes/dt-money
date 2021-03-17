import Summary from '../Summary'
import TransactionList from '../TransactionList'
import * as S from './styles'
import { DashboardProps } from './types'

const Dashboard = (props: DashboardProps) => {
  // const {} = props
  return (
    <S.Container>
      <Summary />
      <TransactionList />
    </S.Container>
  )
}

export default Dashboard
