export type TransactionTypeProps = {
  title: string;
  icon: string;
  onClick: () => void
  isActive: boolean
  activeColor: Variants
}


export type RadioStyleProps = {
  isActive: boolean
  activeColor: Variants
}

export type Variants =
  | 'green'
  | 'red'
