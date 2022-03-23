import React from 'react'
import styled from 'styled-components'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import CircleIcon from '@mui/icons-material/Circle'
import { Typography } from '@mui/material'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  
  & + & {
    border-top: solid 1px #f1f1f1;
    padding-top: 12px;
  }
  
  > div + div {
    margin-left: 12px;
  }
  
  .content {
    cursor: pointer;
    padding: 0 6px;
    
    &:hover {
      background-color: rgba(248, 222, 255, 0.3)
    }
  }
    
  .state svg {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`

const NotificationItem = ({ title, text, timestamp, icon, read }) => {

  const [ isRead, toggleRead ] = React.useState(read)

  return (
    <Container>
      <div className={"state"}>
        {isRead
          ? <CircleIcon fontSize={"small"} onClick={() => toggleRead(v => !v)}/>
          : <CircleOutlinedIcon fontSize={"small"} onClick={() => toggleRead(v => !v)} />
        }
      </div>
      <div>
        {icon}
      </div>
      <div className={"content"}>
        <Typography variant={"subtitle2"}>{title}</Typography>
        <Typography variant={"body2"} mt={1} mb={2}>{text}</Typography>
        {timestamp && <Typography variant={"caption"}>{timestamp}</Typography>}
      </div>
    </Container>
  )
}

export default NotificationItem