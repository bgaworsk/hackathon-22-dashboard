import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 52px);
  overflow-y: scroll;
  padding: 30px 0;
  box-sizing: border-box;
`

const Dashboard = () => {
  return (
    <Wrapper>
      <Container maxWidth={"lg"}>
        <Grid container spacing={2} mt={0}>
          <Grid item xs={12}>
            <Typography variant={"h3"} component={"h1"} color={"primary.contrastText"}>
              Welcome Rick C!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography>Test</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography>Test</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Dashboard