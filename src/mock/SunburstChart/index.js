import Dashlet from '../../components/Dashlet'
import { generateLibTree } from '@nivo/generators'
import { ResponsiveSunburst } from '@nivo/sunburst'
import { Typography } from '@mui/material'
import styled from 'styled-components'

const Container = styled.div`
  height: 202px; 
  width: 100%;
  text-align: center;
  
  .subtitle {
    position: relative;
    top: -21px;
  }
`

const SunburstChart = () => {

  const props = {
    data: generateLibTree(),
    id: 'name',
    value: 'loc',
  }

  return (
    <Dashlet configLink={"test"}>
      <Container>
        <ResponsiveSunburst {...props} />
        <Typography className={"subtitle"} variant={"overline"}>285,492 content items</Typography>
      </Container>
    </Dashlet>
  )
}

export default SunburstChart