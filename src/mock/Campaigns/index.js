import React from 'react'
import { Button, Grid } from '@mui/material'
import Dashlet from '../../components/Dashlet'
import styled from 'styled-components'
import CampaignIcon from '@mui/icons-material/Campaign'
import MockCalendar from './mock-calendar'
import { Metric } from '../Workflows'

const PanelContainer = styled.div`
  height: 454px;
  max-height: 454px;
  overflow-y: scroll;
  
  .height600 {
    height: 454px;
  }
`

const Campaigns = () => {

  return (
    <Dashlet
      title={'Campaigns'}
      configLink={'config/card1'}
      cardActions={
        <>
          <Button size={'small'}>Open Campaign App</Button>
          <Button size={'small'}>Create New Campaign Project</Button>
        </>
      }
      avatar={<CampaignIcon />}
    >
      <Grid container>
        <Grid item xs={10}>
          <PanelContainer>
            <MockCalendar />
          </PanelContainer>
        </Grid>
        <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Metric title={"Active"} value={2} />
          <Metric title={"Planned"} value={32} />
          <Metric title={"Draft"} value={4} />
        </Grid>
      </Grid>
    </Dashlet>
  )
}

export default Campaigns