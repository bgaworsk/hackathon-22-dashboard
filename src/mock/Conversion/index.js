import Dashlet from '../../components/Dashlet'
import { Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import styled from 'styled-components'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import React from 'react'

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

  const [ value, set ] = React.useState(35)
  const [ percent, setPercent ] = React.useState(35)

  React.useEffect(() => {
    const timer = setInterval(() => {
      set((old) => {
        const diff = (Math.random() * 10) - 5
        setPercent(Math.floor(diff))
        return Math.floor(35 + diff)
      })
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, []);

  return (
    <Dashlet title={"Conversion"} configLink={"config/card1"} avatar={<MonetizationOnIcon />}>
      <Container>
        <Typography variant={"h1"} component={"div"}>
          {value} $
        </Typography>
        {percent >= 0 ? (
          <div>
            <ArrowDropUpIcon color={"success"} fontSize={"large"}/>
            <Typography variant={"overline"}>{percent} % over last 2 seconds</Typography>
          </div>
        ) : (
          <div>
            <ArrowDropDownIcon color={"error"} fontSize={"large"}/>
            <Typography variant={"overline"}>{percent} % over last 2 seconds</Typography>
          </div>
        )}

      </Container>
    </Dashlet>
  )
}

export default Conversion