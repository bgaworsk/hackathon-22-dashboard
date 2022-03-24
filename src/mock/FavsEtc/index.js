import Dashlet from '../../components/Dashlet'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import styled from 'styled-components'
import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import ListAsTable from './list-as-table'

const PanelContainer = styled.div`
  height: 260px;
  max-height: 260px;
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

function createData(type, name, site) {
  return { type, name, site }
}

const FavsEtc = () => {

  const [ value, setValue ] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const myEditedData = [
    createData("Article", "Contact Us - Call center agents", "Calista"),
    createData("Picture", "Pictures: Spring Collection", "Calista"),
    createData("Article", "10 reasons you need more swag", "Calista"),
    createData("Picture", "Hilarious Gif", "Calista"),
    createData("Article", "Do you say gif or gif?", "Calista"),
    createData("Picture", "T-2000 Collection", "Calista")
  ]

  const bookmarksData = [
    createData("Teaser", "My favourite teaser", 'Chef Corp.'),
    createData("Article", "Everything you need to know", "SFRA"),
    createData("Article", "Blue is the new black", "Calista"),
    createData("Teaser", "10% Off Shawls", "SFRA")
  ]

  const searchesData = [
    createData("Search", "Articles", 'All content'),
    createData("Search", "Pictures", "Calista"),
    createData("Search", "Pages", "Calista"),
    createData("Search", "Videos", "All content")
  ]

  return (
    <Dashlet
      title={"Smart Access"}
      avatar={<TipsAndUpdatesIcon />}
      configLink={"/config/smartaccess"}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="My Edited Content"/>
          <Tab label="Bookmarks"/>
          <Tab label="Searches"/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ListAsTable rows={myEditedData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListAsTable rows={bookmarksData} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ListAsTable rows={searchesData} />
      </TabPanel>
    </Dashlet>
  )
}

export default FavsEtc