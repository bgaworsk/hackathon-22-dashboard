import React from 'react'
import Dashlet from '../../components/Dashlet'
import TranslateIcon from '@mui/icons-material/Translate'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Tab, Tabs } from '@mui/material'
import Flags from 'country-flag-icons/react/3x2'
import { countries } from 'country-flag-icons'
import styled from 'styled-components'
import LanguageWaffle from './LanguageWaffle'
import { Metric } from '../Workflows'

const StyledBox = styled(Box)`
  font-family: Roboto, sans-serif;
  height: 310px;
`

const StyledFlags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  > div {
    margin-top: 6px;
  }

  .MuiSelect-select {
    width: 70px;
  }

  .flags {
    svg {
      width: 30px;
      box-shadow: 2px 2px 10px 0 rgba(0,0,0,0.1);
      border: solid 1px rgba(0,0,0,.15);
    }

    svg + svg {
      margin-left: 6px;
    }
  }
`

const StyledPanel = styled.div`
  width: 100%;
  position: relative;
  top: -70px;

  .up-to-date {
    margin-top: 0;

    .MuiTypography-h3 {
      font-size: 30px;
    }
  }
`

const TabPanel = ({ children, value, index, ...other }) => {

  const randomValues = () => ([
    Math.floor(Math.random() * 1503),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 12) + 3,
    Math.floor(Math.random() * 40),
    Math.floor(Math.random() * 123)
  ])

  const [ flags ] = React.useState(randomFlags())
  const [ values, set ] = React.useState(randomValues())
  const [ upToDate, setUpToDate ] = React.useState(Math.floor(Math.random() * 100000) + 300000)

  const onChange = () => {
    set(randomValues)
    setUpToDate(Math.floor(Math.random() * 100000) + 300000)
  }

  return (
    <StyledPanel
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {renderFlags(index, flags, onChange, upToDate)}
          <div style={{ width: '100%', height: '200px' }}>
            <LanguageWaffle
              upToDate={values[ 0 ]}
              inTranslation={values[ 1 ]}
              notTranslatedYet={values[ 2 ]}
              newInMaster={values[ 3 ]}
              masterUpdated={values[ 4 ]}
            />
          </div>
        </Box>
      )}
      <Box textAlign={'right'}>
        <Button size={'small'}>Use as preferred Site</Button>
      </Box>
    </StyledPanel>
  )
}

const randomFlags = () => {
  const amount = Math.random() * 6
  const flags = []
  const used = [ -1 ]
  for (let i = 0; i < amount; i++) {
    let index = -1
    do {
      index = Math.floor(Math.random() * countries.length)
    } while (used.includes(index))
    used.push(index)
    flags.push(countries[ index ])
  }
  return flags
}

const renderFlags = (index, flags, handleChange, upToDate) => {

  return (
    <StyledFlags>
      <div>
        <FormControl fullWidth>
          <InputLabel id={`language-select-label-${index}`}>Locale</InputLabel>
          <Select
            labelId={`language-select-label-${index}`}
            label="Locale"
            value={flags[ 0 ]}
            onChange={handleChange}
          >
            {flags.map((flag, index) => (
              <MenuItem key={index} value={flag}>{flag}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={'flags'}>
        {flags.map((flag, index) => {
          const Node = Flags[ flag ]
          return (
            <Node key={index}/>
          )
        })}
      </div>
      <div className={'up-to-date'}>
        <Metric title={'Up to date'} value={upToDate} size={12}/>
      </div>
    </StyledFlags>
  )
}

const SitesAndTranslations = () => {

  const [ value, setValue ] = React.useState(1)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Dashlet
      title={'Sites and Localization'}
      avatar={<TranslateIcon/>}
    >
      <StyledBox
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 270 }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Sites"
          centered={false}
          sx={{ borderRight: 1, borderColor: 'divider', minWidth: 240 }}
        >
          <Tab label="Aurora Augmentation" sx={{ alignItems: 'flex-start ' }}/>
          <Tab label="Calista" sx={{ alignItems: 'flex-start ' }}/>
          <Tab label="Chef Corp." sx={{ alignItems: 'flex-start ' }}/>
          <Tab label="Commercetools Sunrise" sx={{ alignItems: 'flex-start ' }}/>
          <Tab label="Emerald" sx={{ alignItems: 'flex-start ' }}/>
          <Tab label="Hybris Apparel" sx={{ alignItems: 'flex-start ' }}/>
          <Tab label="SFRA" sx={{ alignItems: 'flex-start ' }}/>
          <Tab label="SiteGenesis" sx={{ alignItems: 'flex-start ' }}/>
        </Tabs>
        <TabPanel value={value} index={0}>

        </TabPanel>
        <TabPanel value={value} index={1}/>
        <TabPanel value={value} index={2}/>
        <TabPanel value={value} index={3}/>
        <TabPanel value={value} index={4}/>
        <TabPanel value={value} index={5}/>
        <TabPanel value={value} index={6}/>
        <TabPanel value={value} index={7}/>
      </StyledBox>
    </Dashlet>
  )
}

export default SitesAndTranslations