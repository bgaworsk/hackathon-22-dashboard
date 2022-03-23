import { useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, CardHeader, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

const Dashlet = ({ title, configLink, children, cardActions, avatar, ...props }) => {

  const navigate = useNavigate()

  return (
    <Card {...props}>
      <CardHeader
        title={title}
        action={configLink ?
          <IconButton onClick={() => navigate(configLink)} size={"small"}>
            <SettingsIcon fontSize={"small"}/>
          </IconButton> : false
        }
        avatar={avatar}
      />
      <CardContent>
        {children}
      </CardContent>
      {cardActions ? (
        <CardActions>
          {cardActions}
        </CardActions>
      ) : ''}
    </Card>
  )
}

export default Dashlet