import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

const Dashlet = ({ title, configLink, children, ...props }) => {

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
      />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

export default Dashlet