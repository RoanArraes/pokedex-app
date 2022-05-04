import { useAppSelector } from '../../../../app/hooks';
import { BargraphRounded } from '../../../../components';
import { selectPokedex } from '../pokedex/pokedexSlice';
import { BARGRAPH_INDICATORS_LABEL,
  OPTIONS_OBJECT_POKEMON_DATA,
  BASE_STAT_OBJECT_POKEMON_DATA,
  SENSIBILITY_BARGRAPH
} from '../../../../common/constants';

import {
  Display
} from './styles';

const DisplayCaracteristics = () => {

  const pokemonSelected = useAppSelector(selectPokedex).pokemon;
  const pokemonHP = pokemonSelected.stats.filter(pkm => pkm.stat.name === OPTIONS_OBJECT_POKEMON_DATA.HP);
  const pokemonATK = pokemonSelected.stats.filter(pkm => pkm.stat.name === OPTIONS_OBJECT_POKEMON_DATA.ATTACK);
  const pokemonDEF = pokemonSelected.stats.filter(pkm => pkm.stat.name === OPTIONS_OBJECT_POKEMON_DATA.DEFENSE);
  const pokemonSPEED = pokemonSelected.stats.filter(pkm => pkm.stat.name === OPTIONS_OBJECT_POKEMON_DATA.SPEED);
  const pokemonSPATK = pokemonSelected.stats.filter(pkm => pkm.stat.name === OPTIONS_OBJECT_POKEMON_DATA.SP_ATTACK);

  return (
    <Display.Area>
      <Display.BargraphArea>
        <BargraphRounded 
          label={BARGRAPH_INDICATORS_LABEL.HP}
          value={pokemonHP.length > 0 ? pokemonHP[0][`${BASE_STAT_OBJECT_POKEMON_DATA}`] : 0}
          sensibilityIndicator={SENSIBILITY_BARGRAPH}
        />
      </Display.BargraphArea>
      <Display.BargraphArea>
        <BargraphRounded 
          label={BARGRAPH_INDICATORS_LABEL.ATTACK}
          value={pokemonATK.length > 0 ? pokemonATK[0][`${BASE_STAT_OBJECT_POKEMON_DATA}`] : 0}
          sensibilityIndicator={SENSIBILITY_BARGRAPH}
        />
      </Display.BargraphArea>
      <Display.BargraphArea>
        <BargraphRounded 
          label={BARGRAPH_INDICATORS_LABEL.DEFENSE}
          value={pokemonDEF.length > 0 ? pokemonDEF[0][`${BASE_STAT_OBJECT_POKEMON_DATA}`] : 0}
          sensibilityIndicator={SENSIBILITY_BARGRAPH}
        />
      </Display.BargraphArea>
      <Display.BargraphArea>
        <BargraphRounded 
          label={BARGRAPH_INDICATORS_LABEL.SPEED}
          value={pokemonSPEED.length > 0 ? pokemonSPEED[0][`${BASE_STAT_OBJECT_POKEMON_DATA}`] : 0}
          sensibilityIndicator={SENSIBILITY_BARGRAPH}
        />
      </Display.BargraphArea>
      <Display.BargraphArea>
        <BargraphRounded 
          label={BARGRAPH_INDICATORS_LABEL.SPECIAL_ATTACK}
          value={pokemonSPATK.length > 0 ? pokemonSPATK[0][`${BASE_STAT_OBJECT_POKEMON_DATA}`] : 0}
          sensibilityIndicator={SENSIBILITY_BARGRAPH}
        />
      </Display.BargraphArea>
    </Display.Area>
  )
}

export default DisplayCaracteristics;