import Dashlet from '../../components/Dashlet'
import { Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import styled from 'styled-components'

const Container = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  > div {
    display: flex;
    align-items: center;
  }
`

const Conversion = () => {
  return (
    <Dashlet title={"Conversion"} configLink={"config/card1"}>
      <Container>
        <Typography variant={"h1"} component={"div"}>
          35 $
        </Typography>
        <div>
          <ArrowDropUpIcon color={"success"} fontSize={"large"}/>
          <Typography variant={"overline"}>+3 % over last 2 weeks</Typography>
        </div>
      </Container>
    </Dashlet>
  )
}

export default Conversion