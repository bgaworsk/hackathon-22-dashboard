import { Container, Grid, Typography } from '@mui/material'
import styled from 'styled-components'
import Search from '../Search'
import LineChart from '../../mock/LineChart'
import SunburstChart from '../../mock/SunburstChart'
import Conversion from '../../mock/Conversion'
import Workflows from '../../mock/Workflows'
import Campaigns from '../../mock/Campaigns'
import JobsAndNotifications from '../../mock/JobsAndNotifications'
import SitesAndTranslations from '../../mock/SitesAndTranslations'

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 92px);
  overflow-y: scroll;
  padding: 30px 0;
  box-sizing: border-box;
`

const Dashboard = () => {
  return (
    <Wrapper>
      <Container maxWidth={false}>
        <Grid container spacing={2} mt={0}>
          <Grid item xs={8}>
            <Typography variant={"h3"} component={"h1"} color={"primary.contrastText"}>
              Hello Teresa!
            </Typography>
            <Typography variant={"subtitle1"} color={"primary.contrastText"}>
              You're working on Calista.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Search />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={0}>
          <Grid item xs>
            <LineChart />
          </Grid>
          <Grid item sx={{ width: '300px'}} xs={6} md={2}>
            <Conversion />
          </Grid>
          <Grid item md={2} xs={6}>
            <SunburstChart />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={0}>
          <Grid item xs={12} md={3}>
            <Workflows />
          </Grid>
          <Grid item xs={12} md={6}>
            <Campaigns />
          </Grid>
          <Grid item xs={12} md={3}>
            <JobsAndNotifications />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={0}>
          <Grid item md={6}>
            <SitesAndTranslations />
          </Grid>
          <Grid item md={4}>
            <JobsAndNotifications />
          </Grid>
          <Grid item md={2}>
            <JobsAndNotifications />
          </Grid>
          <Grid item md={4}>
            <JobsAndNotifications />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Dashboard