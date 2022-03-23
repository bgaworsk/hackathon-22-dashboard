import Dashlet from '../../components/Dashlet'
import { ResponsiveLine } from '@nivo/line'
import { generateDrinkStats } from '@nivo/generators'

const LineChart = () => {

  const data = generateDrinkStats(18)
  const props = {
    enableSlices: 'x',
    enableArea: true,
    enablePoints: false,
    curve: 'natural',
    enableGridX: false,
    yScale: {
      type: 'linear',
      stacked: true,
    },
    data
  }

  return (
    <Dashlet title={"Performance"} configLink={"config/card1"}>
      <div style={{ width: '100%', height: '200px'}}>
        <ResponsiveLine {...props} />
      </div>
    </Dashlet>
  )
}

export default LineChart