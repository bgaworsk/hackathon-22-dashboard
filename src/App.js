import React from 'react'
import styled from 'styled-components'
import AppHeader from './components/AppHeader'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesConfiguration from './components/RoutesConfiguration'
import TabBar from './components/TabBar'

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(100% 100% at 100% 100%, #6FC3B8 0%, #0972B1 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`

function App() {

  const [ showDashboard, set ] = React.useState(false)

  return (
    <Router>
      <Container>
        <AppHeader />
        <TabBar dashboardActive={showDashboard} toggle={set}/>
        {showDashboard ? <Dashboard /> : (
          <div style={{ backgroundColor: '#ffffff', width: '100vw', height: 'calc(100vh - 92px)' }} />
        )}
        <RoutesConfiguration />
      </Container>
    </Router>
  );
}

export default App;
