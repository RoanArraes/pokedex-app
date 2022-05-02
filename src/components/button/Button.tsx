import {
  ButtonArea
} from './styles';

type Props = {
  label?: string,
  onClick: () => void
}

const Button = ({
  label,
  onClick
}: Props) => {
  return (
    <ButtonArea
      onClick={onClick}
    >
      {label && label}
    </ButtonArea>
  )
}

export default Button;