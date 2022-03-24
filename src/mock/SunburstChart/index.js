import Dashlet from '../../components/Dashlet'
import { generateLibTree } from '@nivo/generators'
import { ResponsiveSunburst } from '@nivo/sunburst'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import data from './data.json'

const Container = styled.div`
  position: relative;
  top: -30px;
  height: 202px; 
  width: 100%;
  text-align: center;
  font-family: Roboto, sans-serif;
`

const SunburstChart = () => {

  const props = {
    data: data,
    id: 'name',
    value: 'loc',
  }

  return (
    <Dashlet configLink={"test"}>
      <Container>
        <ResponsiveSunburst {...props} />
        <Typography className={"subtitle"} variant={"overline"} mt={4}>285,492 content items</Typography>
      </Container>
    </Dashlet>
  )
}

export default SunburstChart