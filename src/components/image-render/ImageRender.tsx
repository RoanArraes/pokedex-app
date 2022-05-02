import { useEffect, useState } from 'react';
import { getPokemonData } from '../../services/pokemons';
import {
  Image
} from './styles';

type Props = {
  idToGetImage: string
}

const ImageRender = ({
  idToGetImage
}: Props) => {

  useEffect(() => {
    if(idToGetImage) {
      getImagePokemon(idToGetImage)
    }
  }, [idToGetImage]);

  const [ image, setImage ] = useState("");

  const getImagePokemon = async (id: string) => {
    const response = await getPokemonData(id);
    if (response) {
      setImage(response.sprites["front_default"]);
    }
  }

  return (
    <Image.Area>
      <Image.Image 
        urlImage={image}
      />
    </Image.Area>
  )
};

export default ImageRender;