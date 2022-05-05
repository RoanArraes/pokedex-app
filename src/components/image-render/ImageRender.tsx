import {
  Image
} from './styles';

type Props = {
  urlImage: string,
  className?: string,
  alt: string
}

const ImageRender = ({
  urlImage,
  className,
  alt
}: Props) => {

  return (
    <Image.Area
      className={className}
    >
      <Image.Image 
        src={urlImage}
        alt={alt}
      />
    </Image.Area>
  )
};

export default ImageRender;