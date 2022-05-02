import { BARGRAPH_INDICATORS_LABEL } from '../../../../common/constants';
import { BargraphRounded } from '../../../../components';
import {
  Display
} from './styles';

const DisplayCaracteristics = () => {
  return (
    <Display.Area>
      <Display.BargraphArea>
        <BargraphRounded 
          label={BARGRAPH_INDICATORS_LABEL.HP}
        />
      </Display.BargraphArea>
      <Display.BargraphArea>
        <BargraphRounded 
          label={BARGRAPH_INDICATORS_LABEL.ATTACK}
        />
      </Display.BargraphArea>
      <Display.BargraphArea>
        <BargraphRounded 
          label={BARGRAPH_INDICATORS_LABEL.DEFENSE}
        />
      </Display.BargraphArea>
      <Display.BargraphArea>
        <BargraphRounded 
          label={BARGRAPH_INDICATORS_LABEL.SPEED}
        />
      </Display.BargraphArea>
      <Display.BargraphArea>
        <BargraphRounded 
          label={BARGRAPH_INDICATORS_LABEL.SPECIAL_ATTACK}
        />
      </Display.BargraphArea>
    </Display.Area>
  )
}

export default DisplayCaracteristics;