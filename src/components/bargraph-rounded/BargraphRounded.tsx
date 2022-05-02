import {
  Bargraph,
  IndicatorBar
} from './styles';

type Props = {
  label?: string,
  value?: number,
  sensibilityIndicator?: number
};

const numberIndicators = 10;

const BargraphRounded = ({
  label,
  value = 20,
  sensibilityIndicator = 1
}: Props) => {

  const renderIndicators = (qtIndicators: number) => {
    const inidicatorBars = [];

    for ( let qtt = 0; qtt < qtIndicators; qtt++ ) {
      inidicatorBars.push(
        <IndicatorBar 
          isActiveBar={verifyIsActiveBar(qtt)}
          key={"idBar"+ qtt.toString()}
        />
      );
    }

    return(
      inidicatorBars.map(bar => {
        return bar
      })
    );
  };

  const verifyIsActiveBar = (idxIndicator: number): boolean => {
    const numIndicatorActived = ((value * sensibilityIndicator) / numberIndicators);

    if(idxIndicator <= numIndicatorActived) {
      return true
    }

    return false;
  }

  return (
    <Bargraph.Area>
      <Bargraph.IndicatorsArea>
        {renderIndicators(numberIndicators)}
      </Bargraph.IndicatorsArea>
      <Bargraph.Label>
        {label}
      </Bargraph.Label>
    </Bargraph.Area>
  )
}

export default BargraphRounded;