import React from 'react'
import Dashlet from '../../components/Dashlet'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { IconButton, LinearProgress, Typography } from '@mui/material'
import styled from 'styled-components'
import UploadIcon from '@mui/icons-material/Upload'
import CancelIcon from '@mui/icons-material/Cancel'
import NotificationItem from './notification-item'
import CommentIcon from '@mui/icons-material/Comment'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 12px;
  }
`

const Progress = ({click}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, []);

  return (
    <Wrapper>
      <UploadIcon />
      <div>
        <Typography variant={"overline"}>Happy Birthday.png</Typography>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant={"caption"} mt={1}>Uploading …</Typography>
      </div>
      <IconButton onClick={click}>
        <CancelIcon />
      </IconButton>
    </Wrapper>
  )
}

const createNotification = (title, text, timestamp, read = false, icon= <CommentIcon fontSize={"large"}/>) => ({ title, text, timestamp, read, icon })

const JobsAndNotifications = () => {

  const initialNotifications = [
    createNotification("New comment in article 'Moon Boots'", "Hey Teresa, that's actually a good point. Can you please make sure that the changes are implemented before Tuesday.", '2 minutes ago'),
    createNotification("New comment in article 'Moon Boots'", "Hey Teresa, that's actually a good point. Can you please make sure that the changes are implemented before Tuesday.", '2 minutes ago', true),
    createNotification("New comment in article 'Moon Boots'", "Hey Teresa, that's actually a good point. Can you please make sure that the changes are implemented before Tuesday.", '2 minutes ago', true),
    createNotification("New comment in article 'Moon Boots'", "Hey Teresa, that's actually a good point. Can you please make sure that the changes are implemented before Tuesday.", '2 minutes ago', true),
  ]
  const [ notifications, setNotifications ] = React.useState(initialNotifications)
  const [ showProgress, toggleProgress ] = React.useState(true)

  const handleClick = () => {
    toggleProgress(false)
    setNotifications([
      createNotification("Upload Canceled", "The upload of 'Happy Birthday.png' was canceled", "1 second ago", false, <UploadIcon fontSize={"large"} /> ),
      ...initialNotifications
    ])
  }

  return (
    <Dashlet title={"Notifications & Jobs"} avatar={<NotificationsIcon />}>
      <div style={{ overflowY: 'scroll', maxHeight: '492px', height: '492px'}}>
        {showProgress && (
          <>
            <Progress click={handleClick}/>
            <hr style={{ borderTop: 'solid 1px #f1f1f1'}} />
          </>
        )}
        {notifications.map((notification, index) => (
          <NotificationItem key={index} title={notification.title} text={notification.text} timestamp={notification.timestamp} read={notification.read} icon={notification.icon}/>
        ))}
      </div>
    </Dashlet>
   )
}

export default JobsAndNotifications