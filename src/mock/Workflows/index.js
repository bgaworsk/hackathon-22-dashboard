import React from 'react'
import { Box, Button, Grid, Tab, Tabs, Typography } from '@mui/material'
import Dashlet from '../../components/Dashlet'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Open from './open'
import styled from 'styled-components'
import EmptyState from '../../components/EmptyState'
import Closed from './closed'

const PanelContainer = styled.div`
  height: 250px;
  max-height: 250px;
  overflow-y: scroll;
`

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <PanelContainer
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </PanelContainer>
  )
}

export const Metric = ({ value, title, trend, negative }) => (
  <Grid
    item xs={4}
    onClick={() => alert('Opening WF App …')}
    sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
    mb={4}
  >
    <Typography variant={'h3'} component={'div'}>
      {value}
    </Typography>
    <Typography variant={'overline'}>{title}</Typography>
    {trend && (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {!negative ? (
          <ArrowDropUpIcon color={'success'} fontSize={'large'}/>
        ) : (
          <ArrowDropDownIcon color={'error'} fontSize={'large'}/>
        )}
        <Typography variant={'overline'} sx={{ lineHeight: '1.2', fontSize: '11px', width: '70px' }}>{trend}</Typography>
      </div>
    )}
  </Grid>
)

const Workflows = () => {

  const [ value, setValue ] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Dashlet
      title={'Workflows'}
      configLink={'config/card1'}
      cardActions={
        <Button size={'small'}>Open Workflow App</Button>
      }
      avatar={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.33 14.15H7.77L4.39 7.38L1 14.15H2.84C3.53 18.28 6.71 21.56 10.78 22.4L12.58 19.2C9.55 19.09 7.06 16.99 6.33 14.15Z"
            fill="#3F3F3F"/>
          <path
            d="M23 12.4601C23 11.2701 22.79 10.1401 22.41 9.08008H18.67C19.25 10.0801 19.6 11.2301 19.6 12.4601C19.6 14.3701 18.8 16.0701 17.53 17.3001L16.57 15.8801L12.85 22.4801L20.36 21.4901L19.45 20.1501C21.62 18.2801 23 15.5301 23 12.4601Z"
            fill="#3F3F3F"/>
          <path
            d="M13.68 7.33003L21.25 7.34003L16.72 1.28003L15.96 2.81003C14.98 2.49003 13.94 2.31003 12.85 2.31003C9.89 2.31003 7.23 3.58003 5.37 5.61003L7.06 9.00003C8.24 7.03003 10.39 5.69003 12.84 5.69003C13.38 5.69003 13.89 5.77003 14.4 5.89003L13.68 7.33003Z"
            fill="#3F3F3F"/>
        </svg>
      }
    >
      <Grid container>
        <Metric title={'Assigned to me'} value={'34'}/>
        <Metric title={'Created by me'} value={'12'} trend={'+2 last month'}/>
        <Metric title={'Closed by me'} value={'8'} trend={'-1 last month'} negative/>
      </Grid>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Open"/>
          <Tab label="Running"/>
          <Tab label="Closed"/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Open/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EmptyState />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Closed />
      </TabPanel>
    </Dashlet>
  )
}

export default Workflows