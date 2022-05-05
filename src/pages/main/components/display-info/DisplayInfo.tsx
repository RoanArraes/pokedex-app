import { useAppSelector } from '../../../../app/hooks';
import { ImageRender } from '../../../../components';
import { selectPokedex } from '../pokedex/pokedexSlice';
import {
  Display
} from './styles';

const DisplayInfo = () => {

  const pokemon = useAppSelector(selectPokedex).pokemon;

  return (
    <Display.Area>
      <ImageRender 
        alt="map-pokemon"
        className='display-info__background-image'
        urlImage="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/04/kit-especial-pokemon-go-personalizados-pokemon.jpg" 
      />
      <Display.InfoArea>
        <Display.Info>
          <Display.LabelInfo>
            NAME:
          </Display.LabelInfo>
          <Display.ResultInfo>
            {pokemon.name}
          </Display.ResultInfo>
        </Display.Info>
        <Display.Info>
          <Display.LabelInfo>
            TYPE:
          </Display.LabelInfo>
          {
            pokemon.types.map((pkm,idx) => {
              return (
                <Display.ResultInfo>
                  {(idx === (pokemon.types.length - 1)) ? pkm.type.name : pkm.type.name + ","}
                </Display.ResultInfo>
              )
            })
          }
        </Display.Info>
        <Display.Info>
          <Display.LabelInfo>
            HEIGHT:
          </Display.LabelInfo>
          <Display.ResultInfo>
            {pokemon.height + " meters"}
          </Display.ResultInfo>
        </Display.Info>
        <Display.Info>
          <Display.LabelInfo>
            WEIGHT:
          </Display.LabelInfo>
          <Display.ResultInfo>
            {pokemon.weight + " lbs"}
          </Display.ResultInfo>
        </Display.Info>
      </Display.InfoArea>
    </Display.Area>
  )
}

export default DisplayInfo;