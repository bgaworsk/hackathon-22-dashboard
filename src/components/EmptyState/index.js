import styled from 'styled-components'
import { Typography } from '@mui/material'
import trashPandaJson from './trash-panda.json'
import Lottie from 'react-lottie-player'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const EmptyState = () => {
  return (
    <Container>
      <Lottie
        animationData={trashPandaJson}
        play
        style={{ width: 120, height: 120, marginTop: 50 }}
      />
      <Typography variant={"subtitle2"} mt={3}>You don"t have any running workflows.</Typography>
    </Container>
  )
}

export default EmptyState