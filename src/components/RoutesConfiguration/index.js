import { Route, Routes } from 'react-router-dom'
import Config from '../Config'

const RoutesConfiguration = () => {
  return (
    <Routes>
      <Route path={"/config/:id"} element={<Config />} />
    </Routes>
  )
}

export default RoutesConfiguration