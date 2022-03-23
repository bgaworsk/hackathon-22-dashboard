import styled from 'styled-components'
import AppHeader from './components/AppHeader'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesConfiguration from './components/RoutesConfiguration'

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(100% 100% at 100% 100%, #6FC3B8 0%, #0972B1 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`

function App() {
  return (
    <Router>
      <Container>
        <AppHeader />
        <Dashboard />
        <RoutesConfiguration />
      </Container>
    </Router>
  );
}

export default App;
