import { useAppSelector } from '../../../../app/hooks';
import { LABEL_DISPLAY_INFO_POKEMON } from '../../../../common/labels';
import { ImageRender } from '../../../../components';
import { selectPokedex } from '../pokedex/pokedexSlice';
import {
  Display
} from './styles';

import BackgroundDisplayInfoImage from '../../../../assets/images/pokemon.jpg';

const DisplayInfo = () => {

  const pokemon = useAppSelector(selectPokedex).pokemon;

  return (
    <Display.Area>
      <ImageRender 
        alt="display-info-background"
        className='display-info__background-image'
        urlImage={BackgroundDisplayInfoImage} 
      />
      <Display.InfoArea>
        <Display.Info>
          <Display.LabelInfo>
            {LABEL_DISPLAY_INFO_POKEMON.NAME}
          </Display.LabelInfo>
          <Display.ResultInfo>
            {pokemon.name}
          </Display.ResultInfo>
        </Display.Info>
        <Display.Info>
          <Display.LabelInfo>
            {LABEL_DISPLAY_INFO_POKEMON.TYPE}
          </Display.LabelInfo>
          {
            pokemon.types.map((pkm,idx) => {
              return (
                <Display.ResultInfo
                  key={pkm.slot}
                >
                  {(idx === (pokemon.types.length - 1)) ? pkm.type.name : pkm.type.name + ","}
                </Display.ResultInfo>
              )
            })
          }
        </Display.Info>
        <Display.Info>
          <Display.LabelInfo>
            {LABEL_DISPLAY_INFO_POKEMON.HEIGHT}
          </Display.LabelInfo>
          <Display.ResultInfo>
            {pokemon.height + " meters"}
          </Display.ResultInfo>
        </Display.Info>
        <Display.Info>
          <Display.LabelInfo>
            {LABEL_DISPLAY_INFO_POKEMON.WEIGHT}
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