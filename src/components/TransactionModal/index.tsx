import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { useTransactions } from '../../contexts'
import * as S from './styles'
import TransactionType from './TransactionType'
import transactionTypeData from './transactionTypeData'
import { TransactionModalProps } from './types'

const TransactionModal = (props: TransactionModalProps) => {
  const { isOpen, onRequestClose } = props
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [selectedType, setSelectedType] = useState(transactionTypeData[0].type)


  const createNewTransaction = async (e: FormEvent) => {
    e.preventDefault()
    await createTransaction({ title, amount, category, type: selectedType })
    setTitle('')
    setAmount(0)
    setCategory('')
    setSelectedType(transactionTypeData[0].type)
    onRequestClose()
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.CloseButton
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <S.CloseIcon src={closeImg} alt='Fechar modal' />
      </S.CloseButton>
      <S.Form onSubmit={createNewTransaction}>
        <S.Title>Cadastrar transação</S.Title>
        <S.Input placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}

        />
        <S.Input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <S.TypeContainer>
          <TransactionType
            title={transactionTypeData[0].title}
            icon={transactionTypeData[0].icon}
            onClick={() => setSelectedType(transactionTypeData[0].type)}
            isActive={selectedType === transactionTypeData[0].type}
            activeColor='green'
          />
          <TransactionType
            title={transactionTypeData[1].title}
            icon={transactionTypeData[1].icon}
            onClick={() => setSelectedType(transactionTypeData[1].type)}
            isActive={selectedType === transactionTypeData[1].type}
            activeColor='red'
          />
        </S.TypeContainer>
        <S.Input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </Modal>
  )
}

export default TransactionModal
