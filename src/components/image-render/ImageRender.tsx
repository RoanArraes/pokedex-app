import {
  Image
} from './styles';

type Props = {
  urlImage: string
}

const ImageRender = ({
  urlImage
}: Props) => {

  return (
    <Image.Area>
      <Image.Image 
        urlImage={urlImage}
      />
    </Image.Area>
  )
};

export default ImageRender;