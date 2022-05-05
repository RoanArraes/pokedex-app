import {
  ButtonArea
} from './styles';

type Props = {
  label?: string,
  onClick: () => void,
  children?: React.ReactNode
}

const Button = ({
  onClick,
  children
}: Props) => {
  return (
    <ButtonArea
      onClick={onClick}
    >
      {children}
    </ButtonArea>
  )
}

export default Button;