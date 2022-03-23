import { Typography } from '@mui/material'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
  
  *:first-child {
    margin-right: 12px;
  }
`

const Search = () => {

  return (
        <Container>
          <SearchIcon color={"disabled"} />
          <Typography color={"text.disabled"}><em>Search for content, campaigns, projects, …</em></Typography>
        </Container>
  )
}

export default Search