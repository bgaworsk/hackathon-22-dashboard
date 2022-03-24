import Dashlet from '../../components/Dashlet'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import React from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, Tab, Tabs, Typography } from '@mui/material'
import styled from 'styled-components'
import Projects from './projects'

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

const ProjectAndTodos = () => {

  const [ value, setValue ] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const data = [
    {
      "name": "Swatpants Product Launch",
      "todos": [ 'Upload content', 'Hire actors for infomercial' ]
    },
    {
      "name": "Things I Hate",
      "todos": [ 'Lists', 'Irony', 'Lists', 'Repetition', 'inconSistency' ]
    },
    {
      "name": "My $ecret Project",
      "todos": [ 'Error 421: You cannot see this' ]
    }
  ]

  return (
    <Dashlet title={"Projects and Todos"} avatar={<PlaylistAddCheckIcon />} configLink={"config/projectandtodos"}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Open Todos"/>
          <Tab label="Projects"/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {data.map((project, index) => (
          <Box key={index} mt={2}>
            <Typography variant={"subtitle2"}>{project.name}</Typography>
            <Box ml={2}>
              <FormGroup>
                {project.todos.map((todo, index) => (
                  <FormControlLabel key={index} control={<Checkbox />} label={todo} />
                ))}
              </FormGroup>
            </Box>
          </Box>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projects />
      </TabPanel>
    </Dashlet>
  )
}

export default ProjectAndTodos