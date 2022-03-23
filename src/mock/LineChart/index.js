import Dashlet from '../../components/Dashlet'
import { ResponsiveLine } from '@nivo/line'
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart'
import data from './data.json'

const LineChart = () => {

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
    axisLeft:{
      legend: "Page Impressions",
      legendPosition: "middle",
      legendOffset: -45,
      tickValues: 5
    },
    margin: { top: 10, right: 20, bottom: 20, left: 50 },
    data
  }

  return (
    <Dashlet
      title={"Performance"}
      configLink={"config/card1"}
      avatar={<StackedLineChartIcon />}
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      <div style={{ width: '100%', height: '200px'}}>
        <ResponsiveLine {...props} />
      </div>
    </Dashlet>
  )
}

export default LineChart