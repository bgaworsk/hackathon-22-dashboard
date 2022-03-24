import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Card, CardContent, CardHeader, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Lottie from 'react-lottie-player'
import worldJson from './world.json'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.4);
  backdrop-filter: blur(1px);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  
  .dialog {
    width: 50vw;
    min-height: 50vh;
    z-index: 101;
  }
`

const Config = () => {

  const navigate = useNavigate()

  const onDismiss = () => {
    navigate(-1);
  }

  const prevent = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <Wrapper onClick={onDismiss}>
      <div className={"dialog"} onClick={prevent}>
        <Card raised>
          <CardHeader
            action={
              <IconButton onClick={onDismiss}>
                <CloseIcon />
              </IconButton>
            }
            title={`Configuration`}
          />
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Lottie
                loop
                animationData={worldJson}
                play
                style={{ width: 150, height: 150}}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </Wrapper>
  )
}

export default Config