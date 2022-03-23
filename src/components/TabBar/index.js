import styled from 'styled-components'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { Typography } from '@mui/material'

const Container = styled.div`
  height: 40px;
  background-color: #545454;
  display: flex;
  align-items: flex-end;

  .dashboard-tab {
    display: flex;
    width: 40px;
    height: 38px;
    justify-content: center;
    align-items: center;
    border-top: solid 6px #D278EB;
    background-color: rgba(17, 112, 171, 0.97);
    box-sizing: border-box;
  }
  
  .document-tab {
    margin-left: 4px;
    height: 32px;
    background-color: #E0FFFA; 
    display: flex;
    align-items: center;
    padding: 0 30px 0 6px;
    
    svg {
      width: 16px;
      height: 16px;
      padding-right: 6px;
    }
  }
`

const TabBar = () => {
  return (
    <Container>
      <div className={"dashboard-tab"}>
        <DashboardIcon sx={{ color: '#ffffff' }} />
      </div>
      <div className={"document-tab"}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 1H4V3H20V1Z" fill="#3F3F3F"/>
          <path d="M4 4V23H20V4H4ZM16.24 16.24L13.34 15.23L12 18L10.66 15.23L7.76 16.24L8.77 13.34L6 12L8.77 10.66L7.76 7.76L10.66 8.77L12 6L13.34 8.77L16.24 7.76L15.23 10.66L18 12L15.23 13.34L16.24 16.24Z" fill="#3F3F3F"/>
        </svg>
        <Typography variant={"body2"}>Women's Category</Typography>
      </div>
    </Container>
  )
}
export default TabBar